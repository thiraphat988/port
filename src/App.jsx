import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/pr01.jpg" />

        <Title title="Thiraphat Taiphom (Off)">
          <h3>ตำแหน่ง : IT supprot</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("1999/10/12").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +0969860554
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202066@ssru.ac.th</p>
          <p>www.mattssru@gmail.com</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>มีความสนใจงานเกี่ยว IT support และ network ตอนนี้ยังไม่ค่อยมีประสบการ์ณเท่าที่ควรแต่พร้อมเรียนรู้เกี่ยวกับสิ่งใหม่ๆด้านนี้</p>
        </Title>

        <Title title="Work Experience">
          <p>เคยทำงานที่เขตเทศบาล และเคยพาร์ทไทม์สต๊อกสินค้า</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>Word</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>
      </div>
    </main>
  )
}

export default App