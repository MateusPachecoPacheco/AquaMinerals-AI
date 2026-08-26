export interface DashboardMetrics {
    totalUsers: number;
    totalReports: number;
    reportsByStatus: { status: string; _count: number }[];
    averageSalinity: number | null;
    averagePh: number | null;
    totalActiveProjects: number;
    totalCollectionPoints: number;
  }
  
  export interface IDashboardRepository {
    getMetrics(): Promise<DashboardMetrics>;
  }