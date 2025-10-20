export interface HttpRequest<T = unknown> {
  body?: T
  headers?: Record<string, string | string[] | undefined>
}

export interface HttpResponse<T = unknown> {
  status: number
  body: T
}
