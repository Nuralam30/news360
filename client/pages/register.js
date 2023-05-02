import Link from 'next/link';

export default function Register() {
    return (
        <div className='register'>
            <div className="container">
                <form className="register-form">
                    <input type="text" className="form-control mb-2" placeholder='Enter your name' />
                    <input type="text" className="form-control mb-2" placeholder='Enter email' />
                    <input type="text" className="form-control mb-2" placeholder='Enter password' />
                    <button className="btn btn-success btn-sm mb-3">Register</button>
                    <p>Already have account ? <Link href='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}