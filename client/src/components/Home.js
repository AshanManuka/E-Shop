import React, { Component } from 'react';
import './../css/home.css';


export default class Home extends Component {
  
  render() {
    return (
      <div className='mainDivSec'>
        
        <button type="button" id='adminBtn'><a href='/adminDashboard' ><img src={require('./../assets/storeLogo.png')} alt="Logo Image" /></a></button>
        <button type="button" id='adminBtnBar'><a href='/adminDashboard' ></a><h4><b>| Welcome to the CoMaZZ Online Shopping Store</b></h4></button>

        <br/>

        <br/><br/>
         

        <div className='btnSec'>
        <br/>
          <button type="button" class="btn btn-primary"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Sport Items</h3><h2><i class="fa-solid fa-volleyball"></i></h2></a></button><br/>
          <button type="button" class="btn btn-dark"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Mobile & Accesories</h3></a></button><br/>
          <button type="button" class="btn btn-success"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Textile Items</h3></a></button><br/>
          <button type="button" class="btn btn-danger"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Cosmetics Items</h3></a></button>
        </div>


        <div className='sliderDiv'>
          <h3 style={{fontFamily:'serif', color: 'GrayText'}}><b>Discount Today</b></h3>
        <img src={require('./../assets/wapeOne.jpg')} alt="Today Discount Item" />
        </div>


        <button type="button" id='goBtn'><a href='/loginPage' style={{textDecoration: 'none', color: 'black'}}><h3>Let's Shopping</h3></a></button>
        <br/><br/><br/><br/>

        <div className='aboutSec'>

        <h1><b>we Are</b></h1>
        <br/><br/><br/>
        <h6><b>Nowadays, many people are getting into the IT field. So as a Trainee Software engineer, I feel the need to write "The Importance of Industrial Training".
        The unfortunate thing is that when most people start pursuing a degree or diploma on their own, they focus only on the content of the program. It is a mistake that happens due to a lack of understanding. Because, when we choose a degree program, we need to be aware not only of the number of modules taught but also of whether those taught can be put to practical use and whether it will be possible to get job training. 
        As an Example : We come across some concepts, and no matter how much we learn about them, we cannot understand them properly until we apply them in practice.</b></h6>
        <br/>
        <h6><b>Nowadays, one can see a large number of jobs in the IT field, so people can choose a job of their choice. But it is not an easy thing.
        However, if you want to be a geek person, 
	        *Must be able to identify and adapt to rapidly changing/new technologies
	        *They should have the ability and knowledge to apply what they learn practically
	        *Must be able to project collaboratively with a team
        According to me, the best way to get all the above is "Industrial Training". These days I getting that experience so I have an understanding of it.
        as I understand, No matter how many things we learn in 2 or 3 or 4 years in academics, we see many differences in those things in practical application. I think this is the main thing we need to adjust in the industry placement. Because this is where we take the first step into the business IT field.
        We hope to be an employee, a freelancer, or an owner of a company, but the foundation for all of them is the chapter called "industrial training" mentioned above. So our career path is determined by what we do during that time</b></h6>
        <br/>
        <h6><b>-So, we know little about the field. We have a lot to learn. Learn as much as you can.-</b></h6>


        </div>

    </div>

       

        


       
      
      
    )
  }
}
