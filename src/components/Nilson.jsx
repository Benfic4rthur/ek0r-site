import nilson from '../assets/nilson.jpeg';
export default function Nilson() {
    return (
        <div className='flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg'>
            <div>
                <img src={nilson} className='rounded-s-full rounded-r-full grayscale' style={{ height: '200px' }}></img>
            </div>
            <h1>Nilson</h1>
            <h1 className='text-lg'>Engenharia/Matematica</h1>
        </div>
    );
}
