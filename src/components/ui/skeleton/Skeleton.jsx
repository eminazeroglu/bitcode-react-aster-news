import CompSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Skeleton(props) {
    return (
        <div>
            <CompSkeleton {...props}/>
        </div>
    )
}

export default Skeleton;
