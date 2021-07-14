import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Avatar, FormProfile, InputProfile, ProfileCardButton } from "./styles";


export default function ProfileCard() {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const [isEditable, setIsEditable] = useState(false)
    const [profileName, setProfileName] = useState('')
    const [profileEmail, setProfileEmail] = useState('')

    const nameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const makeEditable = () => {
        setIsEditable((prev) => !prev)
    }

    useEffect(() => {
        axios.get(
            'http://localhost:8000/user',
            config
        )
            .then(response => {
                setProfileName(response.data.name)
                setProfileEmail(response.data.email)
            })
    }, [])

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let name = nameInputRef.current?.value
        let email = emailInputRef.current?.value
        let password = passwordInputRef.current?.value

        axios.put(
            'http://localhost:8000/users', {
            name,
            password,
            email
        },
            config
        )
            .then(response => {
                Swal.fire(
                    'Account Updated!',
                    'Your Account has been updated',
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                })
            })
    }

    return (
        <>
            <h1>{profileName}</h1>

            <Avatar
                alt="avatar"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />

            <p>{profileEmail}</p>

            <ProfileCardButton onClick={makeEditable}>
                Edit Profile
            </ProfileCardButton>

            {isEditable && <>
                <FormProfile onSubmit={submitHandler}>
                    <InputProfile
                        type="text"
                        placeholder="name"
                        ref={nameInputRef}
                    />
                    <InputProfile
                        type="email"
                        placeholder="email"
                        ref={emailInputRef}
                    />
                    <InputProfile
                        type="password"
                        placeholder="new password"
                        ref={passwordInputRef}
                    />

                    <ProfileCardButton color="rgb(21, 230, 150);"> Save </ProfileCardButton>
                </FormProfile>
            </>}
        </>
    )
}