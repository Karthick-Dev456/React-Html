import React from 'react'

const BasicFormFields = () => {
    return (
        <div>
            <form>

                <label>Name:</label>
                <input type="text" />

                <label>Select Country:</label>
                <select>

                    <option value="ind">India</option>
                    <option value="aus">Australia</option>
                    <option value="sa">South Africa</option>

                </select>

                <label>Feedback:</label>
                <textarea></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default BasicFormFields
