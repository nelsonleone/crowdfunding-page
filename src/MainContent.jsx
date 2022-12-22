import { useEffect } from "react"
export default function MainContent(props){

  return (
    <main>
    <section className="intro-section">
      <img src="./images/logo-mastercraft.svg" alt="" aria-hidden="true" className="intro-sectionImg"/>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="action-buttons">
        <button onClick={props.handleModalShow}>Back this project</button>

        {
         window.innerWidth <  500 
          ? 
          <svg
          width="56" 
          height="56" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={props.handleBookmark}
          >
          <g fill="#ddd" fillRule="evenodd">
            <circle fill={props.bookmarkState ? "#3cb4ac" : "#2F2F2F"} cx="28" cy="28" r="28"/>
            <path fill="#ddd" d="M23 19v18l5-5.058L33 37V19z"/>
          </g>
         </svg>
          :
          <button  onClick={props.handleBookmark}
            className={props.bookmarkState ? "bookmarked" : ""}
          >
            {props.bookmarkState ? 
              <svg
                width="57" 
                height="57" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <g fill="#ddd" fillRule="evenodd">
                  <circle fill="#3cb4ac" cx="28" cy="28" r="28"/>
                  <path fill="#ddd" d="M23 19v18l5-5.058L33 37V19z"/>
                </g>
              </svg>

              : 

              <img src="./images/icon-bookmark.svg" alt="ADD TO BOOKMARK" aria-hidden="true"/>
            }
            {props.bookmarkState ? "MARKED" : "Bookmark"}
          </button>
        }

      </div>
    </section>

    <div className="count">
      <div className="amount-backed">
        <h1>${props.totalPledgeValue ? (props.totalPledgeValue + 89914).toLocaleString() : '89,914'}</h1>
        <p>of $100,000 backed</p>
      </div>
      <div className="total-backers">
        <h1>
          {props.pledgeValue.bambooStand !== "" || props.pledgeValue.blackStand  !== "" || props.pledgeValue.noReward !== "" ? 5008 : 5007}
        </h1>
        <p>total backers</p>
      </div>
      <div className="days-left">
        <h1>56</h1>
        <p>days left</p>
      </div>

      <div className="range-bar"></div>
    </div>

    <div className="productsDetails-Container">
    <article className="about-project">
      <h2>About this project</h2>
      <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

          <span>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
          </span>
      </p>
    </article>

    <article className="product">
      <div className="productDesc-head">
        <h2>Bamboo Stand</h2>
        <p className="pledge-limit">
          Pledge $25 or more
        </p>
      </div>
      <p>
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list.
      </p>
      <div className="productDesc-end">
        <h1>{props.pledgeValue.bambooStand  !== ""  ? 100 : 101} <span className="--left">left</span></h1>
        <button className="select-reward"  onClick={props.handleModalShow}>
          Select Reward
        </button>
      </div>
    </article>

    <article className="product">
      <div className="product-desc">
        <h2>Black Edition Stand</h2>
        <p className="pledge-limit">
          Pledge $75 or more
        </p>
      </div>
      <p>
        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.
      </p>
      <div className="productDesc-end">
        <h1>{props.pledgeValue.blackStand  !== ""  ? 63 : 64} <span className="--left">left</span></h1>
        <button className="select-reward"  onClick={props.handleModalShow}>
          Select Reward
        </button>
      </div>
    </article>

    <article className="product unavailable">
      <div className="product-desc">
        <h2>Mahogany Special Edition</h2>
        <p className="pledge-limit">
          Pledge $200 or more
        </p>
      </div>
      <p>
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.
      </p>
      <div className="productDesc-end">
        <h1>0 <span className="--left">left</span></h1>
        <button className="select-reward" disabled={true}>
          Out of Stock
        </button>
      </div>
    </article>
    </div>
    </main>      
  )
}