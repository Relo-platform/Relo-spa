import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../../utils/apiFetch';
import ApiReturnedError from '../../components/errors/ApiReturnedError';

function PlannerPage() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(false);
  const [title, setTitle] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [buyBudget, setBudget] = useState("");
  const [monthlyRentBudget, setMonthlyRentBudget] = useState("");
  const [dealBreakers, setDealBreakers] = useState([]);
  const [description, setDescription] = useState("");
  const [mustHaves, setMustHaves] = useState([]);
  const [peopleCount, setPeopleCount] = useState("");
  const [priorities, setPriorities] = useState("");
  const [withAnimals, setWithAnimals] = useState(false);

  const handleDealBreakersChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setDealBreakers(prev => [...prev, value]);
    } else {
      setDealBreakers(prev => prev.filter(item => item !== value));
    }
  };

  const handleMustHavesChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setMustHaves(prev => [...prev, value]);
    } else {
      setMustHaves(prev => prev.filter(item => item !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await apiFetch('/relocation_plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        move_date: moveDate,
        monthly_rent_budget: monthlyRentBudget,
        buy_budget: buyBudget,
        deal_breakers: dealBreakers,
        description: description,
        must_haves: mustHaves,
        people_count: peopleCount,
        priorities: priorities,
        with_animals: withAnimals,

      })
    });

    const data = await response.json();

    if (data.errors) {
      setApiError(true);
    } else {
      navigate("/plans/" + data.id);
    }
  };

  return (
    <>
      {apiError && <ApiReturnedError />}
      <h1>Start your relocation</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of the plan (example: 'Move to the Albuqerque')"
        />
        <input
          name="moveDate"
          type="date"
          value={moveDate}
          onChange={(e) => setMoveDate(e.target.value)}
        />
        <input
          name="buyBudget"
          type="number"
          value={buyBudget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="How much would you take with you for purchase purpose?"
        />
        <input
          name="rentBudget"
          type="number"
          value={monthlyRentBudget}
          onChange={(e) => setMonthlyRentBudget(e.target.value)}
          placeholder="How much would you take with you for rent purpose?"
        />
        <div>
          <p>What definitely should NOT be an option?</p>
          <label>
            <input name="firstFloor" type="checkbox" value="first_floor" onChange={handleDealBreakersChange} />
            First floor
          </label>
          <label>
            <input name="gasStove" type="checkbox" value="gas_stove" onChange={handleDealBreakersChange} />
            Gas stove
          </label>
        </div>
        <div>
          <p>What definitely should present as an option?</p>
          <label>
            <input name="notFirstFloor" type="checkbox" value="not_first_floor" onChange={handleMustHavesChange} />
            Not a First floor
          </label>
          <label>
            <input name="electricStove" type="checkbox" value="electric_stove" onChange={handleMustHavesChange} />
            Electric stove
          </label>
        </div>
        <input
          name="descriprion"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A few words for yourself about this trip?"
        />
        <input
          name="peopleCount"
          type="number"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          placeholder="How many people will move?"
        />
        <input
          name="priorities"
          type="text"
          value={priorities}
          onChange={(e) => setPriorities(e.target.value)}
          placeholder="todo priorities"
        />
        <input
          name="withAnimals"
          type="checkbox"
          checked={withAnimals}
          onChange={(e) => setWithAnimals(e.target.checked)}
        />
        <button type="submit">Create Plan</button>
      </form>
    </>
  )
}

export default PlannerPage;
