export default function CompleteModal(props){
   return(
      <div className="modal-complete">
         <img src="./images/icon-check.svg" alt="Check image showing you have successfully Backed the project"/>
         <h2>Thanks for your support!</h2>
         <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
         </p>
         <button className="gotIt-btn" onClick={props.handlePledgeContinue}>Got it!</button>
      </div>
   )
}