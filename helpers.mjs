const connectToDataBase = () => {{
    const dummyPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Connected to database');
            resolve();
        }, 3000);
    });
    return dummyPromise;
}};

export default connectToDataBase