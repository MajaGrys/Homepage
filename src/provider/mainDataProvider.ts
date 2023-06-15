export interface chatGPTResponse {
        "id"?: string,
        "object"?: string,
        "created"?: number,
        "model"?: string,
        "usage"?: {
          "prompt_tokens"?: number,
          "completion_tokens"?: number,
          "total_tokens"?: number
        },
        "choices"?: [
          {
            "message"?: {
              "role"?: string,
              "content"?: string
            },
            "finish_reason"?: string,
            "index"?: number
          }
        ]
}

interface MailData {
  contactName: string,
  contactEmail: string,
  contactTopic: string,
  contactMessage: string
}

export class Provider {
    private getDefaultOpenAIOptions = (message: string) => ({  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify(
          {model: 'gpt-3.5-turbo',messages: [{'role': 'user', content: message}]}
        )
        })

    public async sendMailData (mailData: MailData) {
      const options:RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailData)}

       return fetch('/homepage/ajaxmail.php', options)
    }

    public async getOpenAIData(
        message: string,
        options?: RequestInit
      ){
        const fetchOptions = options || this.getDefaultOpenAIOptions(message)
        return fetch('https://api.openai.com/v1/chat/completions', fetchOptions)
      }
}

export default new Provider()