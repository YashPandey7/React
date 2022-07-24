import Sdata from "./Sdata";
import Card from './Card';

const Else = () => {
    return (
        <>
            <div class="col-md-4">
                <Card fname={Sdata[2].fname} imgsrc={Sdata[2].imgsrc} />
            </div>
        </>
    );
}
export {Else};