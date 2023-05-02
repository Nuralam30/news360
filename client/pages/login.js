import Link from 'next/link';

export default function Login() {
    return (
        <div className='login'>
            <div className="container">
                <form className="login-form">
                    <input type="text" className="form-control mb-2" placeholder='Enter email' />
                    <input type="text" className="form-control mb-2" placeholder='Enter password' />
                    <button className="btn btn-success btn-sm mb-3">Login</button>
                    <p>Not registered ? <Link href='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
}