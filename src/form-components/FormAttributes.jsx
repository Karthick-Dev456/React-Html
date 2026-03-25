import React from 'react'

const FormAttributes = () => {
    return (
        <div>
            <input 
                type="text"
                placeholder="Enter your name"
                required
                minLength={5}
                maxLength={20}
                pattern="[a-zA-Z]+"
                readOnly
                disabled
                autoFocus
                autoComplete='on'

            />

            <input 
                type="password"
                placeholder="Enter your password"
                pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                // This pattern requires at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.
            />

            <input
                type='number'
                placeholder="Enter a number"
                min={0}
                max={100}
                step={10}
            />

            <input
                type='file'
                accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .txt"
                multiple
            />


            <select multiple>

                <option value="ind">India</option>
                <option value="aus">Australia</option>
                <option value="sa">South Africa</option>

            </select>

            <input type="submit" value="Submit" />
        </div>
    )
}

export default FormAttributes
