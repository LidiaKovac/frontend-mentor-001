import { FC, useEffect } from "react"
import movements from "../../data.json"
import "./Graph.scss"

export const Graph: FC = () => {
  return (
    <div className="graph__wrap">
      <h2 className="text--big">Spending - Last 7 Days</h2>
      <div className="graph__area">
        {movements?.map((mov,i) => {
            let day = new Date().getDay() + -1 > 0 ? new Date().getDay() - 1 : 0
            
            console.log(day, i);
            
          return (
            <div className="graph__block">
              <div className="graph__day">{mov.day}</div>
              <div
                className={
                  i === day ? "graph__amount accent" : "graph__amount"
                }
                style={{ height: mov.amount * 3 + "px" }}
              >
                
                </div> 
                <div className="graph__amount--text">${mov.amount}</div>
            </div>
          )
        })}
      </div>
      <div className="divider"></div>
      <div className="graph__summary">
        <div className="total__text">
          Total this month
          <div className="total__number">
            <div className="total">$478.33</div>
          </div>
        </div>
        <div className="percentage">
          <div className="percentage__data">+2.4%</div>
          <div className="percentage__text">from last month</div>
        </div>
      </div>
    </div>
  )
}
