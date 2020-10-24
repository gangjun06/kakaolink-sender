import { Link } from "../types"

export const Send = (data: Link) => {
  window.Kakao.Link.sendDefault(data)
}
