import { useState , useEffect} from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Modal from './Modal'
import CompleteModal from './CompleteModal'

function App() {
  const [bookmark,setBookmark] = useState(localStorage.getItem("bookmark") || false)
  const [modalShow,setModalShow] = useState(false)
  const [pledgeInputShow,setPledgeInputShow] = useState(false)
  const [pledgeValue,setPledgeValue] = useState({
    noReward:"",
    bambooStand:"",
    blackStand:""
  })
  const [totalPledgeValue,setTotalPledgeValue] = useState('')
  const [completedModal,setCompletedModal] = useState(false)

  


  function getPledgeValue(e){
    const {name,value} = e.target;

    setPledgeValue(prevValue => {
      return {...prevValue,
      [name]: value
      }
    })
  }

  function handlePledgeContinue(){
    setCompletedModal(false)
    if(pledgeValue.noReward || pledgeValue.bambooStand || pledgeValue.blackStand ){
      setTimeout(handleModalShow,400)
      handleProgressBar()
    }
  }

  function handleConstantPledgeAmount(e){
    const value = e.target.innerText;
    const valueParsed = value.replace(/\$/g,'');
    if(e.target.classList.contains('constBtn1')){
      setPledgeValue(prevState => {
        return {...prevState,bambooStand:valueParsed}
      })
    }
    if(e.target.classList.contains('constBtn2')){
      setPledgeValue(prevState => {
        return {...prevState,blackStand:valueParsed}
      })
    }
  }

  function handleProgressBar(){
    let value1;
    let value2;
    let value3;
    if(pledgeValue.noReward || pledgeValue.bambooStand || pledgeValue.blackStand ){
      value1 = pledgeValue.noReward;
      value2 = pledgeValue.bambooStand;
      value3 = pledgeValue.blackStand;

      setTotalPledgeValue(Number(value1 + value2 + value3))
    }
  }

  if(totalPledgeValue !== ""){
    setTimeout(setProgressBar,500)
  }
  
  function setProgressBar(){
     setTimeout(() => {
       document.documentElement.style.setProperty('--rangeProgressBar',`calc(80% + ${totalPledgeValue / 50}%)`)
       document.documentElement.style.setProperty('--animation-name','rangeBar')
     }, 500);
  }

  function handleBookmark(){
    setBookmark(prevState => {
      return prevState = !prevState
    })
  }

  function handleModalShow(){
    setModalShow(prevState => prevState = !prevState)
  }

  function handleModalShowComplete(){
    setCompletedModal(true)
    document.documentElement.style.setProperty("--hide-modal","none")
  }

  useEffect(() => {
    localStorage.setItem("bookmark",bookmark)
  },[bookmark])

  return (
    <>
      <Header />
      {modalShow ? 
      <Modal 
       handleModalShow={handleModalShow}
       showPledgeInput={pledgeInputShow}
       pledgeValue={pledgeValue}
       handleChange={getPledgeValue}
       setPledgeValue={setPledgeValue}
       handleConstantPledgeAmount={handleConstantPledgeAmount}
       handleModalShowComplete={handleModalShowComplete}
      /> 
      : 
       <MainContent
       handleBookmark={handleBookmark}
       bookmarkState={bookmark}
       handleModalShow={handleModalShow}
       pledgeValue={pledgeValue}
       totalPledgeValue={totalPledgeValue}
       completedModal={completedModal}
      />}

      {completedModal ? <CompleteModal handlePledgeContinue={handlePledgeContinue} /> : ""}
      
    </>
  )
}

export default App
