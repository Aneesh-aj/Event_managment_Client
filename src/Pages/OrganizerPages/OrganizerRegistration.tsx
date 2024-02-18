import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Link } from 'react-router-dom';

interface OrganizerRegistrationProps {}

interface Country {
  isoCode: string;
  name: string;
}

interface State {
  isoCode: string;
  name: string;
}

interface City {
  name: string;
}



const OrganizerRegistration: React.FC<OrganizerRegistrationProps> = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [value, setValue] = useState<string | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
  const [selectedState, setSelectedState] = useState<string | undefined>();
  const [selectedCity, setSelectedCity] = useState<string | undefined>();

  useEffect(() => {
    const getCountries = async () => {
      const result: Country[] = await Country.getAllCountries();
      setCountries(result);
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getStates = async () => {
      if (selectedCountry) {
        const result: State[] = await State.getStatesOfCountry(selectedCountry);
        
        setStates(result);

      }
    };

    getStates();
  }, [selectedCountry]);

  useEffect(() => {
    const getCities = async () => {
      try {
        if (selectedCountry && selectedState) {
        
          console.log('the city',City.getCitiesOfState)
  
          const result: City[] = await City.getCitiesOfState(selectedCountry, selectedState);
          console.log(result)
          setCities(result);

        }
      } catch (error) {
        console.error('Failed to fetch cities:', error);
      }
    };
  
    getCities();
  }, [selectedState, selectedCountry]);
  
  return (
    <div className='h-auto overflow-y-scroll bg-[#f0f2f0] w-full flex justify-center custom-scrollbar'>
    <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto my-10 bg-white p-6 md:p-12 rounded-xl shadow shadow-slate-300">
      <div className='flex justify-center '>
        <h1 className="text-4xl font-medium pb-4">Register</h1>
      </div>
      <form action="" className="my-6 md:my-10 space-y-5">
        <label htmlFor="ownerName">
          <p className="font-medium text-slate-700 pb-2">Ownername</p>
          <input id="ownerName" name="ownername" type="text" className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your Owner name" />
        </label>
        <label htmlFor="email">
          <p className="font-medium text-slate-700 pb-2">Email address</p>
          <InputText keyfilter="email" id="email" name="email" className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
        </label>
        <label htmlFor="phoneNumber">
          <p className="font-medium text-slate-700 pb-2">Phone number</p>
          <InputText keyfilter="pint" id="phone" placeholder='Enter your number' value={value} onChange={(e) => setValue(e.target.value)} className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" maxLength={14} />
        </label>
        <label htmlFor="password">
          <p className="font-medium text-slate-700 pb-2">Password</p>
          <input id="password" name="password" type="password" className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
        </label>
        <label htmlFor="conformPassword">
          <p className="font-medium text-slate-700 pb-2">conform Password</p>
          <input id="conformPassword" name="conformPassword" type="password" className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
        </label>
        <div className='w-full flex justify-between'>
          <label htmlFor="country" className='w-6/12 me-3 '>
            <p className="font-medium text-slate-700 pb-2">Country</p>
            <select id="country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full py-3 border border-black bg-white rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              {countries.map(({ isoCode, name }) => (
                <option key={isoCode} value={isoCode}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="state" className='w-6/12 '>
            <p className="font-medium text-slate-700 pb-2">State</p>
            <select id="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="w-full py-3 border border-black bg-white rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              {states.map(({ isoCode, name }) => (
                <option key={isoCode} value={isoCode}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='w-full flex justify-between'>
          <label htmlFor="city" className='w-6/12 me-3 '>
            <p className="font-medium text-slate-700 pb-2">City</p>
            <select id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full py-3.5  border  border-black bg-white rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              {cities.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="building">
            <p className="font-medium text-slate-700 pb-2"> Building/floor</p>
            <input id="building" name="building" type="text" className="w-full  py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter company Phone number" />
          </label>
        </div>
        <div className='w-full flex gap-3 '>
          <label htmlFor="pincode" className='w-full'>
            <p className="font-medium text-slate-700 pb-2">Pincode</p>
            <InputText id="picode" name="pincode" keyfilter="pint" maxLength={6} className="w-full   py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
          </label>
          <label htmlFor="ownerId" className='w-full'>
            <p className="font-medium text-slate-700 pb-2">Owner id card</p>
            <FileUpload
              mode="basic"
              name="ownerId"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              className="bg-white w-full h-12 overflow-hidden py-2 border border-black rounded-lg px-3 flex items-center focus:outline-none focus:border-slate-500 hover:shadow"
              chooseLabel="Choose file"
            />
          </label>
        </div>
        <label htmlFor="license">
          <p className="font-medium text-slate-700 pb-2">Company license </p>
          <FileUpload
            mode="basic"
            url="/api/upload"
            accept="image/*"
            id="license" name="license"
            maxFileSize={1000000}
            className="bg-white w-full h-12 overflow-hidden py-2 border border-black rounded-lg px-3 flex items-center focus:outline-none focus:border-slate-500 hover:shadow"
            chooseLabel="Choose file"
          />
        </label>
        <div className='w-full flex gap-3'>
          <label htmlFor="insurance" className=' w-full'>
            <p className="font-medium text-slate-700 pb-2">Company insurance</p>
            <FileUpload
              mode="basic"
              id="insurance" name="insurance"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              className="bg-white w-full h-12 overflow-hidden py-2 border border-black rounded-lg px-3 flex items-center focus:outline-none focus:border-slate-500 hover:shadow"
              chooseLabel="Choose file"
            />
          </label>
          <label htmlFor="passbook" className='bg-yellow w-full'>
            <p className="font-medium text-slate-700 pb-2">Bank passbook</p>
            <FileUpload
              mode="basic"
              id="passbook" name="passbook"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              className="bg-white w-full h-12 overflow-hidden py-2 border border-black rounded-lg px-3 flex items-center focus:outline-none focus:border-slate-500 hover:shadow"
              chooseLabel="Choose file"
            />
          </label>
        </div>
        <div className="flex flex-row justify-between">
          <div>
          </div>
        </div>
        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span>Register</span>
        </button>
        <p className="text-center">Already an Organizer? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"> <Link to='/organizer/Login'><span>Login </span></Link> <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg></span></a></p>
      </form>
    </div>
  </div>
  );
};

export default OrganizerRegistration;
