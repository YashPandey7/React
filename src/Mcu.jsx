import Sdata from "./Sdata";
import Card from './Card';

const Mcu = () => {
    return (
        <>
            <div class="col-md-4">
                <Card fname={Sdata[0].fname} imgsrc={Sdata[0].imgsrc} />
            </div>

            <div class="col-md-4">
                <Card fname={Sdata[1].fname} imgsrc={Sdata[1].imgsrc} />
            </div>
        </>
    );
}
export {Mcu};