import React from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './assets/img/img-1.png';
import img2 from './assets/img/img-2.png';
import img3 from './assets/img/img-3.png';
import img4 from './assets/img/img-4.png';


import caleb from './assets/img/CALEB-1.png';
import crown from './assets/img/CROWN-1.png';
import legacy from './assets/img/LEGACY-1.png';
import anita from './assets/img/Anita-1.png';
import incomeReport from './assets/img/income report 1 1.png';
import circularText from './assets/img/Circular-text.png';
import incomeImg from './assets/img/Income-1.png';
import overviewImg from './assets/img/overview-2.png';
import confirmationPopUp1 from './assets/img/confirmation-pop-up-1.png';
import confirmationPopUp2 from './assets/img/confirmation-pop-up-2.png';
import confirmationPopUp3 from './assets/img/confirmation-pop-up-3.png';


function App() {
  return (
    <div className="App">
        <div className="sticky-nav">
          <div className="slash">Buy Now And Save 20% Off Plan <span className="slash-plans">See Plans And Pricing</span>
          </div>
          <nav>
              <div className="logo">
                  <span>
                      <svg width="43" height="30" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 11.3118C0 5.16061 4.98654 0.174072 11.1377 0.174072H43V0.174072C43 6.32528 38.0135 11.3118 31.8623 11.3118H0V11.3118Z" fill="#F8FBFD"/>
                          <path d="M0 22.9074C0 17.6019 4.30092 13.301 9.60638 13.301H34.7389V13.301C34.7389 19.4522 29.7524 24.4388 23.6012 24.4388H0V22.9074Z" fill="#F8FBFD"/>
                          <path d="M0 26.4275H43V26.4275C43 32.5787 38.0135 37.5652 31.8623 37.5652H11.1377C4.98654 37.5652 0 32.5787 0 26.4275V26.4275Z" fill="#F8FBFD"/>
                      </svg>
                  </span>
                  <p className="logo-text">du<span>desks</span>.</p>
              </div>
              <div className="nav-btn">
                  <button><span>.</span> Home</button>
                  <button>Features</button>
                  <button>Pricing</button>
                  <button>Contact us</button>
              </div>
              <div>
                  <button className="login">Log in 
                      <span>
                          <svg width="14" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 5.99976L1 5.99976" stroke="#F8FBFD" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 11C12 11 17 7.31755 17 5.99996C17 4.68237 12 1 12 1" stroke="#F8FBFD" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </span>
                  </button>
                  <button className="trial">Start 30 days free trial 
                      <span>
                          <svg width="14" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 5.99976L1 5.99976" stroke="#F8FBFD" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 11C12 11 17 7.31755 17 5.99996C17 4.68237 12 1 12 1" stroke="#F8FBFD" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                              
                      </span>
                  </button>
              </div>
          </nav>
      </div>
      <div className="main">
        <div className="header">
          <div className="header-content">
              <div className="header-content-detail">
                  <p className="header-content-text">Start Managing Your School Finances Today</p>
                  <p style={{ fontSize: '45px', fontFamily: 'Open Sans', fontWeight: 700, textAlign: 'center', margin: '30px 0 20px 0' }}>
                      Simplify School Finances With Our All-In-One Management Platform.
                  </p>
                  <p style={{ marginBottom: '46px' }}>
                      Gain full control over income and expenses processes - all from one seamless platform designed for schools
                  </p>
                  <button style={{ backgroundColor: '#F8FBFD', color: '#002F49' }} className="trial">
                      Start 30 days free trial
                      <span>
                          <svg width="14" height="12" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.5 11.9999L4.5 11.9999" stroke="#002F49" strokeOpacity="0.95" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M15.5002 17.0001C15.5002 17.0001 20.5001 13.3177 20.5001 12.0001C20.5001 10.6825 15.5001 7.00012 15.5001 7.00012" stroke="#002F49" strokeOpacity="0.95" strokeWidth="1.50071" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                      </span>
                  </button>
              </div>
              {/* <img src="./assets/img/img-1.png" alt="" /> */}
              <img src={img1} alt='' />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '23px' }}>
              <p style={{ color: '#041822', fontSize: '20px', fontFamily: 'Open Sans', fontWeight: 700, margin: 0, width: '270px', alignSelf: 'center' }}>
                  Trusted by over 20 Schools
              </p>
              <div className="schools">
                  {[
                      { src: caleb, name: 'Caleb International School' },
                      { src: crown, name: 'Crowns Gate School' },
                      { src: legacy, name: 'Legacy Schools' },
                      { src: anita, name: 'Anita College' }
                  ].map((school, index) => (
                      <div className="school" key={index}>
                          <img src={school.src} alt="" />
                          <p style={{ margin: 0 }}>{school.name}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>

        <section style={{ height: '400px', display: 'flex', justifyContent: 'space-between', marginBottom: '174px' }}>
            <div style={{ width: '520px', height: '307px' }}>
                <h2 style={{ color: '#041822', fontFamily: 'Open Sans', fontSize: '30px' }}>Manage School Finances More Efficiently With Edudesks</h2>
                <p style={{ color: '#59676E', fontSize: '20px' }}>
                    EduDesks is your comprehensive solution for seamless school financial management. Designed to simplify budgeting, tracking expenses, and managing payments, with features like automated fee collection, detailed financial reports, and real-time analytics, you can gain better control over your institution's finances
                </p>
            </div>
            <div style={{ width: '490px', height: '400px', display: 'flex', justifyContent: 'flex-end' }}>
                {/* <img className="circle-logo" src="./assets/img/Circular-text.png" alt="" /> */}
                <img className="circle-logo" src={circularText} alt='' />

                <div className="circle">
                    {/* <img className="circle-img" src="./assets/img/income report 1 1.png" alt="" /> */}
                    <img className="circle-img" src={incomeReport} alt='' />

                </div>
            </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', marginBottom: '174px' }}>
            <div style={{ width: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
                <h2 style={{ color: '#4B8BBE', fontSize: '36px', fontWeight: 700, fontFamily: 'Open Sans', width: '800px', margin: 0 }}>
                    Comprehensive Features to Manage your school's Finances
                </h2>
                <p style={{ color: '#59676E', fontSize: '20px', fontFamily: 'Open Sans', width: '618px', margin: 0 }}>
                    Streamline your school's financial operations by efficiently managing salary payments and expenses.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                    {[
                        {
                            title: 'Secured Wallet Management',
                            description: 'Access a secure wallet to handle payments for salaries and expenses without any hassle',
                            img: img2
                        },
                        {
                            title: 'Expense Tracking Made Simple',
                            description: 'Monitor and track all school-related expenses with a streamlined payment system',
                            img: img3
                        },
                        {
                          title: 'Effortless School fees tracking',
                          description: 'With our platform, schools can effortlessly monitor fee payments.',
                          img: img4
                      }
                    ].map((feature, index) => (
                        <div className="features" key={index}>
                            <div style={{ width: '334px', height: '319px', padding: '20px 13px 1px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <div>
                                    <div style={{ borderBottom: '1px solid #E2E9F6' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', margin: '0 0 12px 0' }}>
                                            <span>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="28" height="28" rx="14" fill="#E2E9F6"/>
                                            <path d="M14 18.4686C13.1494 18.8659 12.032 19.1069 10.8082 19.1069C10.1277 19.1069 9.48017 19.0324 8.89307 18.8979C8.51566 18.8115 8.32696 18.7683 8.10084 18.5894C7.97188 18.4873 7.81093 18.2853 7.74025 18.1368C7.61633 17.8765 7.61633 17.624 7.61633 17.1191V10.2426C7.61633 9.61387 8.28025 9.18207 8.89307 9.32243C9.48017 9.45691 10.1277 9.53143 10.8082 9.53143C12.032 9.53143 13.1494 9.29036 14 8.89307C14.8507 8.49577 15.968 8.2547 17.1918 8.2547C17.8723 8.2547 18.5198 8.32923 19.1069 8.4637C19.4843 8.55014 19.673 8.59336 19.8992 8.77228C20.0281 8.87432 20.1891 9.07631 20.2598 9.2248C20.3837 9.48516 20.3837 9.73762 20.3837 10.2426V13.6808" stroke="#002F49" strokeOpacity="0.95" strokeWidth="0.957551" strokeLinecap="round"/>
                                            <path d="M18.1494 19.7453L18.1494 15.2767M15.9152 17.511H20.3837" stroke="#002F49" strokeOpacity="0.95" strokeWidth="0.957551" strokeLinecap="round"/>
                                            <path d="M15.5959 13.6808C15.5959 14.5622 14.8814 15.2767 14 15.2767C13.1186 15.2767 12.4041 14.5622 12.4041 13.6808C12.4041 12.7994 13.1186 12.0849 14 12.0849C14.8814 12.0849 15.5959 12.7994 15.5959 13.6808Z" stroke="#002F49" strokeOpacity="0.95" strokeWidth="0.957551"/>
                                            <path d="M9.85059 14.3192L9.85059 14.3249" stroke="#002F49" strokeOpacity="0.95" strokeWidth="1.27673" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </span>
                                            <p style={{ fontSize: '18px', color: '#041822', fontFamily: 'Open Sans', fontWeight: 600, margin: 0 }}>
                                                {feature.title}
                                            </p>
                                        </div>
                                    </div>
                                    <p style={{ color: '#59676E', lineHeight: '28px', fontSize: '16px' }}>{feature.description}</p>
                                </div>
                                <img style={{ width: 'inherit' }} src={feature.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '22px' }}>
                  <div className="tracker">
                      <div>
                          <div style={{ borderBottom: '1px solid #E2E9F6', marginBottom: '20px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', margin: '0 0 20px 0' }}>
                                  <span>
                                      <svg
                                          width="28"
                                          height="28"
                                          viewBox="0 0 28 28"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <rect width="28" height="28" rx="14" fill="#E2E9F6" />
                                          <path
                                              d="M14 18.4686C13.1494 18.8659 12.032 19.1069 10.8082 19.1069C10.1277 19.1069 9.48017 19.0324 8.89307 18.8979C8.51566 18.8115 8.32696 18.7683 8.10084 18.5894C7.97188 18.4873 7.81093 18.2853 7.74025 18.1368C7.61633 17.8765 7.61633 17.624 7.61633 17.1191V10.2426C7.61633 9.61387 8.28025 9.18207 8.89307 9.32243C9.48017 9.45691 10.1277 9.53143 10.8082 9.53143C12.032 9.53143 13.1494 9.29036 14 8.89307C14.8507 8.49577 15.968 8.2547 17.1918 8.2547C17.8723 8.2547 18.5198 8.32923 19.1069 8.4637C19.4843 8.55014 19.673 8.59336 19.8992 8.77228C20.0281 8.87432 20.1891 9.07631 20.2598 9.2248C20.3837 9.48516 20.3837 9.73762 20.3837 10.2426V13.6808"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                              strokeLinecap="round"
                                          />
                                          <path
                                              d="M18.1494 19.7453L18.1494 15.2767M15.9152 17.511H20.3837"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                              strokeLinecap="round"
                                          />
                                          <path
                                              d="M15.5959 13.6808C15.5959 14.5622 14.8814 15.2767 14 15.2767C13.1186 15.2767 12.4041 14.5622 12.4041 13.6808C12.4041 12.7994 13.1186 12.0849 14 12.0849C14.8814 12.0849 15.5959 12.7994 15.5959 13.6808Z"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                          />
                                          <path
                                              d="M9.85059 14.3192L9.85059 14.3249"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="1.27673"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          />
                                      </svg>
                                  </span>
                                  <p style={{ fontSize: '18px', color: '#041822', fontFamily: 'Open Sans', fontWeight: 600, margin: 0 }}>
                                      Effortless Income tracking
                                  </p>
                              </div>
                          </div>
                          <p style={{ color: '#59676E', lineHeight: '28px', fontSize: '16px' }}>
                              Our platform provides a clear and detailed view of your earnings, helping you monitor every income stream effortlessly.
                          </p>
                      </div>
                      <img style={{ width: 'inherit' }} src={incomeImg} alt="Income tracking" />
                  </div>

                  <div className="tracker">
                      <div>
                          <div style={{ borderBottom: '1px solid #E2E9F6', marginBottom: '20px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', margin: '0 0 20px 0' }}>
                                  <span>
                                      <svg
                                          width="28"
                                          height="28"
                                          viewBox="0 0 28 28"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <rect width="28" height="28" rx="14" fill="#E2E9F6" />
                                          <path
                                              d="M14 18.4686C13.1494 18.8659 12.032 19.1069 10.8082 19.1069C10.1277 19.1069 9.48017 19.0324 8.89307 18.8979C8.51566 18.8115 8.32696 18.7683 8.10084 18.5894C7.97188 18.4873 7.81093 18.2853 7.74025 18.1368C7.61633 17.8765 7.61633 17.624 7.61633 17.1191V10.2426C7.61633 9.61387 8.28025 9.18207 8.89307 9.32243C9.48017 9.45691 10.1277 9.53143 10.8082 9.53143C12.032 9.53143 13.1494 9.29036 14 8.89307C14.8507 8.49577 15.968 8.2547 17.1918 8.2547C17.8723 8.2547 18.5198 8.32923 19.1069 8.4637C19.4843 8.55014 19.673 8.59336 19.8992 8.77228C20.0281 8.87432 20.1891 9.07631 20.2598 9.2248C20.3837 9.48516 20.3837 9.73762 20.3837 10.2426V13.6808"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                              strokeLinecap="round"
                                          />
                                          <path
                                              d="M18.1494 19.7453L18.1494 15.2767M15.9152 17.511H20.3837"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                              strokeLinecap="round"
                                          />
                                          <path
                                              d="M15.5959 13.6808C15.5959 14.5622 14.8814 15.2767 14 15.2767C13.1186 15.2767 12.4041 14.5622 12.4041 13.6808C12.4041 12.7994 13.1186 12.0849 14 12.0849C14.8814 12.0849 15.5959 12.7994 15.5959 13.6808Z"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="0.957551"
                                          />
                                          <path
                                              d="M9.85059 14.3192L9.85059 14.3249"
                                              stroke="#002F49"
                                              strokeOpacity="0.95"
                                              strokeWidth="1.27673"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          />
                                      </svg>
                                  </span>
                                  <p style={{ fontSize: '18px', color: '#041822', fontFamily: 'Open Sans', fontWeight: 600, margin: 0 }}>
                                      Comprehensive Overview
                                  </p>
                              </div>
                          </div>
                          <p style={{ color: '#59676E', lineHeight: '28px', fontSize: '16px' }}>
                              Get a complete view of your earnings, expenses, and financial performance to stay informed and make smart business decisions.
                          </p>
                      </div>
                      <img style={{ width: 'inherit' }} src={overviewImg} alt="Comprehensive Overview" />
                  </div>
              </div>
            </div>
        </section>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', marginBottom: '174px' }}>
          <div style={{ width: '621px' }}>
            <div className="circle">
                <img className="circle-img-1" src={confirmationPopUp1} alt="Confirmation Pop Up 1" />
                <img className="circle-img-2" src={confirmationPopUp2} alt="Confirmation Pop Up 2" />
                <img className="circle-img-3" src={confirmationPopUp3} alt="Confirmation Pop Up 3" />
            </div>
          </div>
          <div style={{ width: '501px', height: '307px' }}>
              <h2 style={{ fontSize: '30px', fontFamily: 'Open Sans', fontWeight: 700, color: '#041822', lineHeight: '49px', marginTop: 0 }}>
                  Effortless Salary Payments Made Simple
              </h2>
              <p>
                  Streamline your school's payroll process with our secure wallet system that allows for quick and easy salary payments. With just a few clicks, you can reduce administrative workload, eliminate errors, and ensure that your staff are paid accurately and on time, allowing you to focus more on what truly matters—educating and supporting your students.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
