import React, { useEffect, useState } from 'react'

const validators = {
  required: (value) => 
    value === undefined && value === null && value === "" ? "Require" : "",
  minLen: (len) => value => 
    value && value.length >= len ? "": `Must be at least ${len} characters` 
}

const MultistepForm = () => {
  const totalSteps = 4;
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("msf-data") || "{}")); 
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [completed, setComplete] = useState(false);

  useEffect(() => {
    localStorage.setItem("msf-data", JSON.stringify(data))
  }, [data])


  return (
    <div>MultistepForm</div>
  )
}

export default MultistepForm