import { TailSpin } from 'react-loader-spinner';


const Loader = () => { 

	return (
        <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
            wrapperClass=""
        />  
	)
}

    
export default Loader;