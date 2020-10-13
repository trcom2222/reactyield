
import React, { useReducer, useEffect, useState}  from "react";
import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import pigImg from '../../assets/images/pig.png';
import currencyImg from '../../assets/images/currency.png';
import DaiImg from '../../assets/images/Dai.png';
import USDCImg from '../../assets/images/USDC.png';
import USDTImg from '../../assets/images/USDT.png';
import TUSDImg from '../../assets/images/TUSD.png';
import Form from 'react-bootstrap/Form';

import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

import { unstable_renderSubtreeIntoContainer } from "react-dom";

const colorBlue = '#4147f6';

const Wrapper = styled.div`
.row {
  padding : 0px 60px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  .logimg {
    width : 60px;
    height : 60px;
  }
  .logoText {
    align-self: center;
    text-align: left;
    margin-bottom : 10px;
  }
  .yeldapptext {
    font-size : 15px;
    color: #4147f6;
  }
  .nextgeneration {
    font-size: 15px;
  }
  .mechanics-text {
    align-self: center;
    color: #4147f6;
    padding : 0px 20px
  }
  .left-container {
    width : 90%;
  }

  .left-sub-container {
    width : 100%;
    border: 1px solid #dbdee3;
    margin : 20px 0px;
    padding : 30px 30px;
  }

  .connect-wallet-text {
    padding: 0px 10px; 
    background-color: white;
    border : 1.5px solid #dbdee3;
    width: 200px;
    height:50px; 
    color: #4147f6;
    font-size: 18px;
    
  }
  .list-item-button {
    padding: 0px 10px; 
    background-color: white;
    border-width: 1.5px;
    width: 200px;
    height:50px; 
    font-size: 18px;
    width : 48%;
    border-color: #4147f6;
    color: #4147f6;
  }
  .small-box {
    width : 38%;
    font-size: 18px;
    padding : 10px 5px;
    margin-top : 10px;
    margin-bottom : 10px;
    border : 1.5px solid #dbdee3;
    text-align: left;
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
  }
  .two-boxes {
    padding-left: 35px;
  }
  .small-box-container {
    display: flex;
    justify-content: space-between;
  }
  .small-box-container2 {
    display: flex;
    justify-content: space-between;
  }
 
  .grayColor {
    color : #828282;
  }
  .title1 {
    width : 100%;
    font-size : 22px;
  }
  .left-side {
    width : 5%;
  }
  .input-container {
    width: 45%;
  }

  .flex-container {
    display:flex;
    justify-content: space-between;
  }
  .item1-container {
    width : 25%;
    justify-content: flex-start;
  }
  .item2-container {
    width : 25%;
  }
  .item3-container {
    width : 25%;
  }
  .item4-container {
    display : block
  }
  .item5-container {
    display : none
  }
  .wallet-btn {
    color:#4147f6;
    width : 20%;
    text-align: center ;
    vertical-align: middle;
    padding-top: 25px;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    .left-side {
      width : 100%;
    }
    .left-container {
      width : 100%;
    }
    .title1 {
      width : 100%;
      text-align : center;
      font-size : 22px;
    }

    .seperator_mobile {
      margin-top : 10px;
      margin-bottom : 10px;
      background-color: #d0d1d4;
      border-bottom-color: rgb(0, 0, 0);
      width: 100%;
      height: 1px;
      border-bottom-width: 1px;
    }
    .seperator {
      display : none;
    }
    
    .small-box-container {
      display: block;
      justify-content: space-between;
    }

    .small-box {
      width : 100%;
      font-size: 18px;
      padding : 10px 5px;
      border-width: 1.5px;
      border-color: #dbdee3;
      border-style: solid;
      text-align: left;
      vertical-align: middle;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;  
    }
    .input-container {
      width: 100%;
    }
    .flex-container {
      display: block;
      justify-content: space-between;
    }
    .item1-container {
      width : 25%;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .item2-container {
      width : 25%;
    }
    .item3-container {
      width : 25%;
    }
    .item4-container {
      width : 25%;
      display : none;
    }
    .item5-container {
      display : block;
      margin-top: 10px;
    }
    .wallet-btn {
      color:'#4147f6';
      text-align: center ;
      vertical-align:'middle';
    }
  }
}
.loader{
  display: flex;
  justify-content: center;
  width: 100%;
}
.seperator {
  margin-top : 10px;
  background-color: #d0d1d4;
  border-bottom-color: rgb(0, 0, 0);
  width: 100%;
  height: 1px;
  border-bottom-width: 1px;
}
.color-blue {
  color: #4147f6;
}
.currencyImg {
  height: 60px;
}
.item-img {
  height: 35px;
}
.item1-container {
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
}
`;


const MainPage = (props) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      initialRender: false,
      statsResponse: [],
      salesResponse: {},
      payoutResponse: {},
      customerResponse: {},
      sellingResponse: [],
      countriesResponse: [],
      leaderboardResponse: [],
      changeData: false,
      currentPage: 1,
      bottomType: 'weekly',
      topType: 'weekly',
    }
  );

  const [isItem1Expanded, setItem1Expanded] = useState(false);
  const [isItem2Expanded, setItem2Expanded] = useState(false);
  const [isItem3Expanded, setItem3Expanded] = useState(false);
  const [isItem4Expanded, setItem4Expanded] = useState(false);
  const [isStakeWallet, setStakeWallet] = useState(false);

  useEffect(() => {
  }, [])

  useEffect(() => {
    setState({
      sellingResponse: props.selling
    })
  }, [props.selling])

  

  useEffect(() => {
    setState({
      payoutResponse: props.payouts
    })
  }, [props.payouts])


  useEffect(() => {
    setState({
      customerResponse: props.customers
    })
  }, [props.customers])

  function changeTopType(val) {
    props.getDashboardPayoutsApi(val)
    setState({
      topType: val
    })
  }

  const refresh = () => {
    setItem1Expanded(false);
    setItem2Expanded(false);
    setItem3Expanded(false);
    setItem4Expanded(false);
  }

  const onClickArrowDown = (index)=> {
    refresh();
    switch (index){
      case 1: 
        setItem1Expanded(!isItem1Expanded);
        break;
      case 2: 
        setItem2Expanded(!isItem2Expanded);
        break;
      case 3: 
        setItem3Expanded(!isItem3Expanded);
        break;
      case 4: 
        setItem4Expanded(!isItem4Expanded);
        break;
      default:
        refresh();
        break;
   }
  }

  return (
    <Wrapper>
      <div className="row" >
        <div style={{display:'flex'}}>
          <div style={{alignItems:'flex-start'}}>
            <img src={logo} alt="logo" className='logimg'/>
          </div>
          <div style={{ width:3, backgroundColor:'blue', marginLeft:5, marginRight:5}}></div>

          <div className="logoText">
            <div className="yeldapptext">YELD.APP</div>
            <div className="nextgeneration">Next-Generation Yield Farming</div>
          </div>
        </div>


        <div>
          <div className='seperator_mobile'></div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div className="mechanics-text">
            Yeld Mechanics
          </div>
          <button className="connect-wallet-text" style={{}}>
            Connect Wallet
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='seperator'></div>
      </div>

      <div className="row" style={{ alignItems: 'center'}}>
        <div className='left-side'>
          <div>
            <img src={pigImg} alt="logo" className='logimg'/>
          </div>
        </div>
        <div className='left-container'>
          <div className="logoText">
            <div className="title1">Your Retirement Stake</div>
          </div>
          <div className='small-box-container'>
            <div className="small-box two-boxes">
              Retirement Yield Available in 24hrs<br/>Time Passed 1hr
            </div>
            <div className="small-box two-boxes" style={{color:'#4147f6'}}>
              Stake Your Yeld Tokens:34<br/>Your Current Staked Yeld Tokens: 194
            </div>
            <div className="small-box wallet-btn" onClick={()=>{setStakeWallet(!isStakeWallet)}}>
              {
                isStakeWallet ? <span>Unstake wallet</span> : <span>Stake wallet</span>
              }
            </div>
          </div>
        </div>
      </div>
      
      <div className='row'>
        <div className='seperator'></div>
      </div>

      <div className="row">
        <div className='left-side'>
          <div style={{justifyContent:'center'}}>
            <img src={currencyImg} alt="logo" className='currencyImg'/>
          </div>
        </div>
        <div className='left-container'>
          <div className="logoText">
            <div className="title1">Your Optimised Yield Farm</div>
          </div>
          {/* 1st */}
          <div className='left-sub-container'>
            <div className='small-box-container2'>
              <div className="item1-container">
                <img src={DaiImg} alt="logo" className='item-img'/>
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div style={{fontWeight:'bold'}}>Dai</div>
                  <div className='grayColor'>Dal Stable Coin</div>  
                </div>
              </div>

              <div className="item2-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>1098%</div>
                  <div>(1032% in Yield)</div>  
                  <div className="grayColor">Interest Rate</div>  
                </div>
              </div>

              <div className="item3-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>0.00 DAI</div>
                  <div className='grayColor'>Available Balance</div>  
                </div>
              </div>
              <div className="item4-container">
                <h3 onClick={()=>onClickArrowDown(1)} style={{cursor:'pointer'}}>
                  {
                    isItem1Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>  
              </div>
            </div>
            <div className="item5-container">
                <h3 onClick={()=>onClickArrowDown(1)} style={{cursor:'pointer'}}>
                  {
                    isItem1Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 

                </h3>
              </div>
            {isItem1Expanded &&
            <div style={{marginTop:20}}>
              <div className='flex-container'>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>Balance 0.000</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <button className="connect-wallet-text list-item-button">
                    Earn
                  </button>

                </div>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>0.0000 YDAI</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <div style={{width:'100%', justifyContent:'space-between', display:'flex'}}>
                  <button className="connect-wallet-text list-item-button">
                    Claim
                  </button>
                  <button className="connect-wallet-text list-item-button" >
                    Redeem Yearn
                  </button>
                </div>
                </div>
              </div>
            </div>
            }
          </div>

          {/* 2nd */}
          <div className='left-sub-container'>
            <div className='small-box-container2'>
              <div className="item1-container">
                <img src={USDCImg} alt="logo" className='item-img'/>
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div style={{fontWeight:'bold'}}>USDC Coin</div>
                <div className='grayColor'>USDC/c</div>  
                </div>
              </div>

              <div className="item2-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>1098%</div>
                  <div>(1032% in Yield)</div>  
                  <div className="grayColor">Interest Rate</div>  
                </div>
              </div>

              <div className="item3-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>0.00 DAI</div>
                  <div className='grayColor'>Available Balance</div>  
                </div>
              </div>
              <div className="item4-container">
                <h3 onClick={()=>onClickArrowDown(2)} style={{cursor:'pointer'}}>
                  {
                    isItem2Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>
              </div>
            </div>
            <div className="item5-container">
                <h3 onClick={()=>onClickArrowDown(2)} style={{cursor:'pointer'}}>
                  {
                    isItem2Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>
              </div>
            {isItem2Expanded &&
            <div style={{marginTop:20}}>
              <div className='flex-container'>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>Balance 0.000</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <button className="connect-wallet-text list-item-button">
                    Earn
                  </button>

                </div>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>0.0000 YDAI</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <div style={{width:'100%', justifyContent:'space-between', display:'flex'}}>
                  <button className="connect-wallet-text list-item-button">
                    Claim
                  </button>
                  <button className="connect-wallet-text list-item-button" >
                    Redeem Yearn
                  </button>
                </div>
                </div>
              </div>
            </div>
            }
          </div>

          {/* 3rd */}
          <div className='left-sub-container'>
            <div className='small-box-container2'>
              <div className="item1-container">
                <img src={USDTImg} alt="logo" className='item-img'/>
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div style={{fontWeight:'bold'}}>USDT</div>
                  <div className='grayColor'>Tether USD</div>
                </div>
              </div>

              <div className="item2-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>1098%</div>
                  <div>(1032% in Yield)</div>  
                  <div className="grayColor">Interest Rate</div>  
                </div>
              </div>

              <div className="item3-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>0.00 DAI</div>
                  <div className='grayColor'>Available Balance</div>  
                </div>
              </div>
              <div className="item4-container">
                <h3 onClick={()=>onClickArrowDown(3)} style={{cursor:'pointer'}}>
                  {
                    isItem3Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>
              </div>
            </div>
            <div className="item5-container">
                <h3 onClick={()=>onClickArrowDown(3)} style={{cursor:'pointer'}}>
                  {
                    isItem3Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>
              </div>
            {isItem3Expanded &&
            <div style={{marginTop:20}}>
              <div className='flex-container'>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>Balance 0.000</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <button className="connect-wallet-text list-item-button">
                    Earn
                  </button>

                </div>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>0.0000 YDAI</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <div style={{width:'100%', justifyContent:'space-between', display:'flex'}}>
                  <button className="connect-wallet-text list-item-button">
                    Claim
                  </button>
                  <button className="connect-wallet-text list-item-button" >
                    Redeem Yearn
                  </button>
                </div>
                </div>
              </div>
            </div>
            }
          </div>
          {/* 4th */}

          <div className='left-sub-container'>
            <div className='small-box-container2'>
              <div className="item1-container">
                <img src={TUSDImg} alt="logo" className='item-img'/>
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div style={{fontWeight:'bold'}}>TUSD</div>
                  <div className='grayColor'>TrueUSD</div>  
                </div>
              </div>

              <div className="item2-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>1098%</div>
                  <div>(1032% in Yield)</div>  
                  <div className="grayColor">Interest Rate</div>  
                </div>
              </div>

              <div className="item3-container">
                <div style={{paddingLeft:10, paddingRight:10}}>
                  <div>0.00 DAI</div>
                  <div className='grayColor'>Available Balance</div>  
                </div>
              </div>
              <div className="item4-container">
                <h3 onClick={()=>onClickArrowDown(4)} style={{cursor:'pointer'}}>
                  {
                    isItem4Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                  </h3>
              </div>
            </div>
            <div className="item5-container">
                <h3 onClick={()=>onClickArrowDown(4)} style={{cursor:'pointer'}}>
                  {
                    isItem4Expanded ? 
                    <FaChevronUp style={{color:colorBlue}}/>
                    :
                    <FaChevronDown style={{color:colorBlue}}/>
                  } 
                </h3>
              </div>
            {isItem4Expanded &&
            <div style={{marginTop:20}}>
              <div className='flex-container'>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>Balance 0.000</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <button className="connect-wallet-text list-item-button">
                    Earn
                  </button>

                </div>
                <div className='input-container'>
                <Form.Group controlId="formBasicBalance" style={{textAlign:'right'}}>
                  <Form.Label>0.0000 YDAI</Form.Label>
                  <Form.Control placeholder="0.000" />
                </Form.Group>
                <div style={{justifyContent:'space-evenly', display:'flex'}}>
                  <Form.Label className="grayColor">25%</Form.Label>
                  <Form.Label className="grayColor">50%</Form.Label>
                  <Form.Label className="grayColor">75%</Form.Label>
                  <Form.Label className="grayColor">100%</Form.Label>
                </div>
                <div style={{width:'100%', justifyContent:'space-between', display:'flex'}}>
                  <button className="connect-wallet-text list-item-button">
                    Claim
                  </button>
                  <button className="connect-wallet-text list-item-button" >
                    Redeem Yearn
                  </button>
                </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default MainPage;