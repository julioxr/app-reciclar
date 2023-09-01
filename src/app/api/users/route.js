import { NextResponse } from "next/server";

const users = [
    {
        username: "julio",
        password: "1234",
        admin: true,
        schools: [
            {
                name: "Escuela 23",
            },
        ],
    },
    {
        username: "flor",
        password: "florcita",
        admin: false,
        schools: [
            {
                name: "Escuela 10",
            },
        ],
    },
];

export async function POST(request) {
    const { username, password } = await request.json();
    const validatedUser = users.find(
        (user) => user.username === username && user.password === password
    );

    if (!validatedUser) {
        return NextResponse.json(
            { message: "Usuario o contraseña no valido" },
            { status: 401 }
        );
    } else {
        return NextResponse.json(validatedUser, { status: 200 });
    }
}
