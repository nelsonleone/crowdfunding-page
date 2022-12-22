import { useState } from "react";
export default function Modal(props){

  const [checkData,setCheckData] = useState({
    checkbox1:false,
    checkbox2:false,
    checkbox3:false
  })



  function handlePledgeInputShow(e){
    const {name, checked} = e.target;
    setCheckData(prevData => {
      return {...prevData,
      [name]  :checked}
    })

  }


  return(
    {props.completedModal ? "" :
      <section className="modal">
        <h1>Back this project</h1>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>

        <svg 
          width="15" 
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          aria-describedby="close-modal"
          className="close-modal"
          onClick={props.handleModalShow}
          >
          <title id="close-modal">Close modal</title>
          <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
          fill="#000" fillRule="evenodd" opacity=".4"/>
        </svg>
        <article className={checkData.checkbox1 ? "support-area  support1 active-pledge" : "support-area support1"}>
            <input
            type="checkbox"
            name="checkbox1"
            id="noReward-checkbox"
            checked={checkData.checkbox1}
            onChange={handlePledgeInputShow}
            />
            <label htmlFor="noReward-checkbox" className={checkData.checkbox1 ? "toggle toggle-bgcolor" : "toggle"}></label>
            <label htmlFor="noReward-checkbox" className="pledge-title">Pledge with no reward</label>
            <p>
              Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email.
            </p>

            <div className={checkData.checkbox1 ? "pledge-inputSection showPledgeInput" : "pledge-inputSection"} >
              <input
                type="text"
                className="enter-pledgeInput"
                value={props.pledgeValue.noReward}
                placeholder="Enter your pledge"
                name="noReward"
                onChange={props.handleChange}
              />
              <button className="continue-btn" onClick={props.handleModalShowComplete}>Continue</button>
            </div>
        </article>

        <article  className={checkData.checkbox2 ? "support-area active-pledge" : "support-area"}>
          <div className="support-intro">
            <input
              type="checkbox"
              name="checkbox2"
              id="bambooStand-checkbox"
              onChange={handlePledgeInputShow}
              checked={checkData.checkbox2}
            />
            <label htmlFor="bambooStand-checkbox" className={checkData.checkbox2 ? "toggle toggle-bgcolor" : "toggle"}></label>
            <div className="row">
                <label htmlFor="bambooStand-checkbox" className="pledge-title">Bamboo Stand</label>
                <p>Pledge $25 or more</p>
                <h2>{props.pledgeValue.bambooStand !== ""  ? 100 : 101} <span className="--left">left</span></h2>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list..
            </p>
          </div>

          <div className={checkData.checkbox2 ? "pledge-inputSection showPledgeInput" : "pledge-inputSection"} >
              <input
                type="text"
                className="enter-pledgeInput"
                value={props.pledgeValue.bambooStand}
                placeholder="Enter your pledge"
                name="bambooStand"
                onChange={props.handleChange}
              />
              <div>
                <button className="constantAmount-btn constBtn1" onClick={props.handleConstantPledgeAmount}>
                  <span>$</span>
                  25
                </button>
                <button className="continue-btn"  onClick={props.handleModalShowComplete}>Continue</button>
              </div>
            </div>
        </article>

        <article className={checkData.checkbox3 ? "support-area active-pledge" : "support-area"}>
          <div className="support-intro">
            <input
              type="checkbox"
              name="checkbox3"
              onChange={handlePledgeInputShow}
              checked={checkData.checkbox3}
              id="blackStand-checkbox"
            />
            <label htmlFor="blackStand-checkbox" className={checkData.checkbox3 ? "toggle toggle-bgcolor" : "toggle"}></label>
            <div className="row">
              <label htmlFor="blackStand-checkbox" className="pledge-title">Black Edition Stand</label>
              <p>Pledge $75 or more</p>
              <h2>{ props.pledgeValue.blackStand  !== ""  ? 63 : 64}<span className="--left">left</span></h2>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>
          </div>

          <div className={checkData.checkbox3 ? "pledge-inputSection showPledgeInput" : "pledge-inputSection"} >
              <input
                type="text"
                className="enter-pledgeInput"
                value={props.pledgeValue.blackStand}
                placeholder="Enter your pledge"
                name="blackStand"
                onChange={props.handleChange}
              />
              <div>
                <button className="constantAmount-btn constBtn2" onClick={props.handleConstantPledgeAmount}>
                <span>$</span>
                  75
                </button>
                <button className="continue-btn" onClick={props.handleModalShowComplete}>Continue</button>
              </div>
            </div>
        </article>

        <article className="support-area unavailable">
          <div className="support-intro">
            <input
            type="checkbox"
            name="checkbox4"
            checked={checkData.checkbox4}
            onChange={handlePledgeInputShow}
            id="mahogany-checkbox"
            />
            <label htmlFor="mahogany-checkbox" className={checkData.checkbox4 ? "toggle toggle-bgcolor" : "toggle"}></label>
            <div className="row">
                <label htmlFor="noReward-checkbox" className="pledge-title">Mahogany Special Edition</label>
                <p>Pledge $200 or more</p>
                <h2>0 <span className="--left">left</span></h2>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
          </div>
          <div className="pledge-inputSection sold-out">Sorry It's Sold Out</div>
        </article>
    </section>
    }
  )
}
