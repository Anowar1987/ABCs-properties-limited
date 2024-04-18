import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        console.log(form.get('name'));
    }

    return (
        <div>
             <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                            <h2 className="text-3xl font-bold text-center mt-5">Please Register</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Write your name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Write your photo URL" name="PhotoUrl" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Write your email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Write Your password" name="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="text-center font-semibold mb-2">Already have an account? <br />Please <Link className="font-bold text-blue-700" to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;