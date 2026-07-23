import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '@/lib/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@aquaminerals:token');
    const storedUser = localStorage.getItem('@aquaminerals:user');

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('@aquaminerals:token');
        localStorage.removeItem('@aquaminerals:user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    const { accessToken, user: userData } = response.data;

    localStorage.setItem('@aquaminerals:token', accessToken);
    localStorage.setItem('@aquaminerals:user', JSON.stringify(userData));
    setUser(userData);
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    
    // Se o backend retorna token direto no register
    if (response.data.accessToken) {
      const { accessToken, user: userData } = response.data;
      localStorage.setItem('@aquaminerals:token', accessToken);
      localStorage.setItem('@aquaminerals:user', JSON.stringify(userData));
      setUser(userData);
    } else {
      // Se não retorna, faz login automático
      await login(email, password);
    }
  };

  const logout = () => {
    localStorage.removeItem('@aquaminerals:token');
    localStorage.removeItem('@aquaminerals:user');
    setUser(null);
  };

  const updateUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem('@aquaminerals:user', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}