const HandleLogin = async (username, password) => {
    const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    const res = {
        status: response.status,
        user: data,
    };

    // console.log(res);

    return res;
};

export default HandleLogin;
