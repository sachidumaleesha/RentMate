import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import styless from './artical.module.css';


function Artical() {
  return (
    <div>
        <Navbar/>
        <div className={styless.house_details}>
        <div className={styless.house_title}>
          <h1>Blog Topic Here</h1>
          <div className={styless.row}>
            <div>
              <p>Small Description is here</p>
            </div>
            <div>
              <i class="bx bxs-layer"></i>
            </div>
          </div>
        </div>
        <div className={styless.gallery}>
          <div className={styless.gallery_img_1}>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
        </div>

        </div>

       
    <div className={styless.row}>
    <div className={styless. leftcolumn}>          
      <div className={styless. card}>
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className={styless. fakeimg}>Image</div>    
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoSunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoSunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </div>
    
    </div>
    <div className={styless. rightcolumn}>         
      <div className={styless. card}>
        <h2>Inqure Now</h2>
        <div className={styless. fakeimg} >Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div className={styless. card}>
        <h3>Recent Post</h3>
        <div className={styless. fakeimg}>Image</div>
        <div className={styless. fakeimg}>Image</div>
        <div className={styless. fakeimg}>Image</div>
      </div>
      
    </div>
  </div>




  <div className={styless.house_details}>
        <div className={styless.house_title}>
          <h1>Populer Post</h1>
          <div className={styless.row}>
            <div>
              <p>Small Description is here</p>
            </div>
            <div>
              <i class="bx bxs-layer"></i>
            </div>
          </div>
        </div>
        <div className={styless.gallery}>
         
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
          <div>
            <img src="https://placehold.jp/600x400.png" alt="" />
          </div>
        </div>

        </div>
        <Footer/>

      
    </div>
  )
}

export default Artical
