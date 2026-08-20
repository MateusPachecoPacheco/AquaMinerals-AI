// Types for AquaAI Knowledge Base and RAG System

export interface KnowledgeDocument {
  id: string;
  title: string;
  category: KnowledgeCategory;
  content: string;
  keywords: string[];
  lastUpdated: string;
}

export type KnowledgeCategory = 
  | 'projeto'
  | 'sustentabilidade'
  | 'minerais'
  | 'tecnologia'
  | 'impacto_economico'
  | 'impacto_ambiental'
  | 'perguntas_frequentes';

export interface UserMessage {
  role: 'user';
  content: string;
  timestamp: string;
}

export interface AssistantMessage {
  role: 'assistant';
  content: string;
  timestamp: string;
  sources?: string[];
  confidence?: number;
}

export type Message = UserMessage | AssistantMessage;

export interface ConversationContext {
  id: string;
  messages: Message[];
  createdAt: string;
  lastActivity: string;
  topic?: string;
}

export interface IntentClassification {
  category: KnowledgeCategory;
  confidence: number;
  entities: Entity[];
}

export interface Entity {
  type: 'mineral' | 'location' | 'parameter' | 'metric' | 'date';
  value: string;
  confidence: number;
}

export interface RetrievalResult {
  documentId: string;
  relevanceScore: number;
  excerpts: string[];
}

export interface RAGResponse {
  answer: string;
  sources: string[];
  confidence: number;
  followUpQuestions: string[];
}

export interface AIServiceConfig {
  knowledgeBasePath: string;
  maxContextLength: number;
  similarityThreshold: number;
  maxSources: number;
}

export interface SearchQuery {
  text: string;
  categories?: KnowledgeCategory[];
  limit?: number;
}

// Utility types
export type Nullable<T> = T | null;

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
