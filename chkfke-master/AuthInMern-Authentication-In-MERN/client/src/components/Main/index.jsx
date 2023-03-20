// import styles from "./styles.module.css";
import './Style.css'
import Table from 'rc-table';
import Logo from "./1024px-Blue_double_ticks.svg.png"
import QRCode from 'react-qr-code';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
return (
	<>
	<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Logo} alt="" />
      <span class="ml-3 text-xl">FakeU</span>
    </a>
    
    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={handleLogout}>Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
<body>
	<div className="wrp1">
		<div className="details">
			<h2>Beneficiary Details:</h2>
			<h5>Beneficicary Name: </h5>
			<h5></h5>
			<h5>Unique Identification Id:</h5>
			<h5>Type Of Art: </h5>
			<h5></h5>
			<h5>Location</h5>
			<h5></h5>

			<h5></h5>
		</div>
	</div>
</body>


	</>
		
	// 	<div className={styles.main_container}>
	// 		<nav className={styles.navbar}>
	// 			<div className={styles.wrp-2} >
	// 			<img src={Logo} alt="" />
    //              <h1>CHKFKE</h1>
	// 			</div>
				
	// 			<button className={styles.white_btn} onClick={handleLogout}>
	// 				Logout
	// 			</button>
	// 		</nav>
	// 		<body>
			
    //         <div className={styles.container_0}> 
	// 		<div className={styles.container_3}>
	// 		    <img src={Logo} alt="" />
	// 			<h2>Anti-Counterfeiting Verification Certificate</h2>
	// 			<h6>Certificate ID : 7788665544</h6>
	// 		</div>
	// 		<div className={styles.wrp-1}>
	// 		<div className={styles.container_1}>
	// 			<h3>Beneficiary Details</h3>
	// 			<h5>Beneficiary Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;John Doe</h5>
	// 			<h5>Date of Birth(YYYY-MM-DD): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-09-12</h5>
	// 			<h5>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</h5>
	// 			<h5>Unique Identification Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8899776655443399</h5>
	// 		</div>
	// 		<div className={styles.container_2}>
	// 			<h3>Verification Details: </h3>
	// 			<h5>Generation Limit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</h5>
	// 			<h5>Location: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lucknow</h5>
	// 			<h5>Date Of Manufacturing:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</h5>
	// 			<h5>Artstyle:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXX</h5>
	// 		</div>
	// 		</div>
			

	// 	</div>
	// 	</body>
	// </div>
	);
};

export default Main;

{/* <div className={styles.qrcode}>
   <QRCode
	title= "anti-counterfeiting"
	value= "geeks for geeks"
	bgColor="white"
	fgColor="black"
	size ={170}
   /> 
</div> */}
{/* <Table columns={columns} data={data} /> */}