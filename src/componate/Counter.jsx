import React, { useState } from 'react'

export default function Counter() {
  const [Num1,setNum1] = useState(0)
  const [Num2,setNum2] = useState(0)
  const [Num3,setNum3] = useState(0)
  const [Num4,setNum4] = useState(0)
  const [Num5,setNum5] = useState(0)
  const [Num6,setNum6] = useState(0)
  const [Num7,setNum7] = useState(0)
  const [Num8,setNum8] = useState(0)

const incrimantimg1 =(e)=>{
  setNum1(Num1+1)
}
  const incrimantimg2 =(e)=>{
  setNum2(Num2+1)
}
 const incrimantimg3 =(e)=>{
  setNum3(Num3+1)
}
const incrimantimg4 =(e)=>{
 setNum4(Num4+1)
}
const incrimantimg5 =(e)=>{
  setNum5(Num5+1)
}
const incrimantimg6 =(e)=>{
 setNum6(Num6+1)
}
const incrimantimg7 =(e)=>{
 setNum7(Num7+1)
}
const incrimantimg8 =(e)=>{
  setNum8(Num8+1)
}


  return (
    <>
    <div className='main'>
    <div>
      <h1 className='Counter-name'>
        <img className='img' src={require("../img/img-1.jpg")} alt="" /></h1>
      <button className='Counter-button' onClick={incrimantimg1}>
        <img className='like' src={require("../img/like.png")} alt="" />
        <h3 className='num'>{Num1}</h3>
      </button>
      <button className='Counter-button' onClick={incrimantimg2}>
        <img className='like' src={require("../img/dislike.png")} alt="" />
        <h3 className='num1'>{Num2}</h3>
      </button>
    </div>
    <div>
      <h1 className='Counter-name'>
        <img className='img' src={require("../img/img-2.jpg")} alt="" /></h1>
      <button className='Counter-button' onClick={incrimantimg3}>
        <img className='like' src={require("../img/like.png")} alt="" />
        <h3 className='num'>{Num3}</h3>
      </button>
      <button className='Counter-button' onClick={incrimantimg4}>
        <img className='like' src={require("../img/dislike.png")} alt="" />
        <h3 className='num1'>{Num4}</h3>
      </button>
    </div>
    <div>
      <h1 className='Counter-name'>
        <img className='img' src={require("../img/img-3.jpg")} alt="" /></h1>
      <button className='Counter-button' onClick={incrimantimg5}>
        <img className='like' src={require("../img/like.png")} alt="" />
        <h3 className='num'>{Num5}</h3>
      </button>
      <button className='Counter-button' onClick={incrimantimg6}>
        <img className='like' src={require("../img/dislike.png")} alt="" />
        <h3 className='num1'>{Num6}</h3>
      </button>
    </div>
    <div>
      <h1 className='Counter-name'>
        <img className='img' src={require("../img/img-4.jpg")} alt="" /></h1>
      <button className='Counter-button' onClick={incrimantimg7}>
        <img className='like' src={require("../img/like.png")} alt="" />
        <h3 className='num'>{Num7}</h3>
      </button>
      <button className='Counter-button' onClick={incrimantimg8}>
        <img className='like' src={require("../img/dislike.png")} alt="" />
        <h3 className='num1'>{Num8}</h3>
      </button>
    </div>
    </div>
    </>
  )
}
