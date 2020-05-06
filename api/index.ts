import { NowRequest, NowResponse } from '@now/node'

export default async (request: NowRequest, response: NowResponse) => {
  response.status(200).send(`Hello World!`)
}
