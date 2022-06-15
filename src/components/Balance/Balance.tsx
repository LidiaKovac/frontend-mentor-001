import { FC } from "react"
import { Icon } from "../Icon/Icon"
import "./Balance.scss"

export const Balance: FC = () => {
  return (
    <div className="balance__wrap">
      <div className="balance__content">
        <div className="text--basic">
        My balance
        </div>
        <div className="text--big bold">
            $921.48
        </div>
      </div>
      <div className="balance__icon">
        <Icon />
      </div>
    </div>
  )
}
