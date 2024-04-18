

const UpdateProfile = () => {
    return (
        <div className="bg-slate-200">
            <h2 className="mb-6 text-3xl text-center font-bold">Update Your Profile</h2>
            <form className="w-1/2 ml-72 mb-10">
            <div className="form-control">
                <label className="label">
                <span className="label-text font-bold">First Name</span>
                </label>
                <input type="text" placeholder="First name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-bold">Last Name</span>
                </label>
                <input type="text" placeholder="Last name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" placeholder="Write your email" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-bold">Password</span>
                </label>
                <input type="password" placeholder="Write your password" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-bold">Re-write password</span>
                </label>
                <input type="password" placeholder="Re-write your password" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Phone</span>
                </label>
                <input type="number" placeholder="Write your phone number" name="name" className="input input-bordered" required />
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default UpdateProfile;