import React from 'react'

const FormInputTypes = () => {
    return (
        <div>
            <form encType="multipart/form-data">

                <label>Text Input:</label>
                <input type="text"/> <br /><br />

                <label>Email Input:</label>
                <input type="email"/> <br /><br />

                <label>Password Input:</label>
                <input type="password"/> <br /><br />

                <label>Number Input:</label>
                <input type="number"/> <br /><br />

                <label>Date Input:</label>
                <input type="date"/> <br /><br />

                <label>Time Input:</label>
                <input type="time"/> <br /><br />

                <label>Months Input:</label>
                <input type="month"/> <br /><br />

                <label htmlFor="file">File Input:</label>
                <input type="file"/> <br /><br />

                <input type="submit" value="Submit" /> <br /><br />

                <input type="button" value="Add" />
            </form>
        </div>
    )
}

export default FormInputTypes
