import { auth } from '@/auth'
import CreateStartupForm from '@/components/CreateStartupForm'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateStartup = async () => {
    const session = await auth()
    if (!session) redirect("/");
    return (<>
        <section className="pink_container">
            <h1 className="heading">
                Submit Your Startup
            </h1>
        </section>

        <CreateStartupForm />
    </>
    )
}

export default CreateStartup