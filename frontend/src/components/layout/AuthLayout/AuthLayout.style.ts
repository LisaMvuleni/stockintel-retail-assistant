import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff8f8;
`;



export const LeftPanel = styled.section`

  position:relative;

  width:75%;

  height:100vh;

  overflow:hidden;

  padding:70px 80px;

  display:flex;

  flex-direction:column;

  justify-content:flex-start;
  

`;




export const WarehouseImage = styled.img`

  position:absolute;

  inset:0;

  width:1900%;

  height:100%;

  object-fit:cover;

  z-index:1;
   left: 0;

  bottom:-100px;

`;



export const FadeOverlay = styled.div`

  position:absolute;

  inset:0;

  z-index:2;
  
  background:

    linear-gradient(
      90deg,
      rgba(255,255,255,0) 20%,
      rgba(255,255,255,0.15) 45%,
      rgba(255,248,248,0.75) 80%,
      #fff8f8 100%
    );


`;



export const Content = styled.div`

  position:relative;

  z-index:5;

  width:430px;

`;



export const Logo = styled.div`

  width:220px;

  margin-bottom:45px;


  img{

    width:150%;

    height:auto;

    object-fit:contain;

  }

`;



// export const BrandTitle = styled.h1`

//   margin:0 0 22px;

//    width: 200px
//   font-size:4rem;
//    height:25px
//   line-height:1.05;

//   letter-spacing:-2px;

//   font-weight:800;

//   color:#111827;



// `;



// export const BrandDescription = styled.p`

//   margin:0;


//   max-width:420px;


//   font-size:1.05rem;

//   line-height:1.7;


//   color:#475569;


// `;



export const FloatingCard = styled.div`

  position:absolute;


  z-index:10;


  right:35px;

  //top:260px;
  bottom:260px;

`;



export const SmallStatCard = styled.div`

  position:absolute;


  z-index:8;


  background:white;


  border-radius:20px;


  padding:18px 25px;


  box-shadow:

    0 20px 50px rgba(15,23,42,.15);


`;



// export const StatOne = styled(SmallStatCard)`

//   bottom:20px;
//    height:20px
//    width:20px;
//   left:40px;

// `;



export const StatTwo = styled(SmallStatCard)`

  bottom:80px;

  left:230px;

`;



export const StatTitle = styled.span`

  display:block;


  font-size:.75rem;


  color:#64748b;


  text-transform:uppercase;


  font-weight:700;


`;



export const StatValue = styled.strong`

  display:block;


  margin-top:2px;


  font-size:2rem;


  color:#111827;


`;




export const RightPanel = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const LoginCard = styled.div`
  width: 460px;
  background: #ffffff;

  padding: 48px;

  border-radius: 20px;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.18);

  display: flex;
  flex-direction: column;
`;

