import './index.css'

export default function Card(props) {
    return (
        <>
            <div className="cards mt-5 flex-1/3  mx-[2rem] my-[5rem]">
                    <div className="content w-full p-5">
                        <img src="/tars_iiit_bh_logo 1.png" alt="society-logo" className="image" />
                        <div className="soc-name">Cultural Society</div>
                        <div className="soc-desc"><p>Engineering students with a zest for bridging the
                            gap between technology and dancing culture.</p>
                        </div>
                        <div className="member flex flex-row">
                            <div className="sec px-2 py-4 ">
                                <h3 className="sec-head">Secretary</h3>
                                <li className="sec-name">Sai Charan <span className="mx-5">Gupta</span></li>
                            </div>
                            <div className="flex flex-col justify-evenly min-w-fit p-2">
                                <h3 className="sec-head">Joint Secretary</h3>
                                <li className="sec-name ">{props.jointSec1}</li>
                                <li className="sec-name ">Arnab Kumar</li>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}