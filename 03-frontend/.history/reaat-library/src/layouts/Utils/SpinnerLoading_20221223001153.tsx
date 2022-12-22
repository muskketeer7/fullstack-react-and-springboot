export const SpinnerLoading = () => {
    return (
        <div className="container m-5 d-flex justify-content-center align-items-center" style={{ height: 550 }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visuallly-hidden"></span>
            </div>
        </div>
    );
};