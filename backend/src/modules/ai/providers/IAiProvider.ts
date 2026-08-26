export interface IAiProvider {
    generateResponse(prompt: string, context?: string): Promise<string>;
  }