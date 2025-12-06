import { useState, useEffect } from 'react';
import './normalize.css'
import './App.css'
import logo from './assets/Midis_logo.svg'

function App() {
  const initialErrors = [
    { type: 'Часы', discipline: 'ЕН.03', priority: 'Критический', description: 'Несоответствие в часах практических занятий' },
    { type: 'Темы', discipline: 'ПМ.01', priority: 'Высокий', description: 'Отсутствуют темы лабораторных работ' },
    { type: 'Название', discipline: 'УП.02', priority: 'Средний', description: 'Расхождение в названии раздела' },
    { type: 'Часы', discipline: 'ZZ.02', priority: 'Высокий', description: 'Неверное распределение аудиторных часов' },
    { type: 'Темы', discipline: 'ЕН.03', priority: 'Критический', description: 'Отсутствует раздел "Самостоятельная работа"' },
    { type: 'Название', discipline: 'ПМ.01', priority: 'Средний', description: 'Некорректное название дисциплины в содержании' },
    { type: 'Часы', discipline: 'УП.02', priority: 'Высокий', description: 'Превышение максимальной нагрузки' },
    { type: 'Темы', discipline: 'ZZ.02', priority: 'Средний', description: 'Дублирование тем в разных разделах' },
    { type: 'Название', discipline: 'ЕН.03', priority: 'Критический', description: 'Несоответствие названия ФГОС' },
    { type: 'Часы', discipline: 'ПМ.01', priority: 'Высокий', description: 'Недостаточное количество часов на практику' },
    { type: 'Темы', discipline: 'УП.02', priority: 'Средний', description: 'Темы не соответствуют компетенциям' },
    { type: 'Название', discipline: 'ZZ.02', priority: 'Низкий', description: 'Опечатка в названии модуля' },
  ];

  // Состояния для фильтров
  const [errors, setErrors] = useState(initialErrors);
  const [filteredErrors, setFilteredErrors] = useState(initialErrors);
  const [filters, setFilters] = useState({
    type: '',
    discipline: '',
    priority: ''
  });

  // Обработчики изменения фильтров
  const handleTypeChange = (e) => {
    const newFilters = { ...filters, type: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleDisciplineChange = (e) => {
    const newFilters = { ...filters, discipline: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handlePriorityChange = (e) => {
    const newFilters = { ...filters, priority: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  // Функция применения фильтров
  const applyFilters = (filterSettings) => {
    let filtered = [...errors];
    
    if (filterSettings.type) {
      filtered = filtered.filter(error => error.type === filterSettings.type);
    }
    
    if (filterSettings.discipline) {
      filtered = filtered.filter(error => error.discipline === filterSettings.discipline);
    }
    
    if (filterSettings.priority) {
      filtered = filtered.filter(error => error.priority === filterSettings.priority);
    }
    
    setFilteredErrors(filtered);
  };

  // Сброс всех фильтров
  const resetFilters = () => {
    setFilters({
      type: '',
      discipline: '',
      priority: ''
    });
    setFilteredErrors(errors);
  };

  // Функции для кнопок
  const Export_excel = () => {
    alert(`Экспортировано ${filteredErrors.length} записей в Excel`)
  }

  const scan = () => {
    alert("Это функция сканирования. Жду бэк для доработки :)")
  }

  const Print_execut = () => {
    window.print()
  }

  // Подсчет приоритетов для отображения в статистике
  const countPriorities = (errorsArray) => {
    return {
      critical: errorsArray.filter(e => e.priority === 'Критический').length,
      high: errorsArray.filter(e => e.priority === 'Высокий').length,
      medium: errorsArray.filter(e => e.priority === 'Средний').length,
      low: errorsArray.filter(e => e.priority === 'Низкий').length
    };
  };

  const priorityCounts = countPriorities(filteredErrors);

  return (
    <>
      <div className="main">
        <div className="workspace">
          <div className="logo">
            <div className="image">
              <img src={logo} alt="Логотип МИДиС" />
            </div>
            <div className="text">
              <p>Проверка учебных <br /> документов</p>
            </div>
          </div>
          
          <div className="errors">
            <div className="text">
              <p>Найдено <span>{filteredErrors.length}</span> совпадений 
                ({priorityCounts.critical} крит, 
                {priorityCounts.high} выс, 
                {priorityCounts.medium} сред, 
                {priorityCounts.low} низ)
              </p>
            </div>
            <div className="export-button">
              <button onClick={Export_excel}>Экспорт в Excel</button>
            </div>
          </div>
          
          <div className="filters-section">
            <div className='Filters'>
              <select 
                name="filters" 
                className='Type'
                value={filters.type}
                onChange={handleTypeChange}
              >
                <option value="">Тип</option>
                <option value="Часы">Часы</option>
                <option value="Темы">Темы</option>
                <option value="Название">Название</option>
              </select>
              
              <select 
                name="filters" 
                className='Discipline'
                value={filters.discipline}
                onChange={handleDisciplineChange}
              >
                <option value="">Дисциплина</option>
                <option value="ЕН.03">ЕН.03</option>
                <option value="ПМ.01">ПМ.01</option>
                <option value="УП.02">УП.02</option>
                <option value="ZZ.02">ZZ.02</option>
              </select>
              
              <select 
                name="filters" 
                className='priority'
                value={filters.priority}
                onChange={handlePriorityChange}
              >
                <option value="">Приоритет</option>
                <option value="Критический">Критический</option>
                <option value="Высокий">Высокий</option>
                <option value="Средний">Средний</option>
                <option value="Низкий">Низкий</option>
              </select>
              
              <div className='Description'>Описание</div>
            </div>
          </div>
          
          <div className="main-info">
            {filteredErrors.length > 0 ? (
              filteredErrors.map((error, index) => (
                <div className="card" key={index}>
                  <div className="card-column Card-Type">
                    <p>{error.type}</p>
                  </div>
                  <div className="card-column Discipline-card">
                    <p>{error.discipline}</p>
                  </div>
                  <div className="card-column Priority-Card">
                    <span className={`priority-dot priority-${error.priority.toLowerCase()}`}></span>
                    <p>{error.priority}</p>
                  </div>
                  <div className="card-column Desc-Card">
                    <p>{error.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>Нет результатов по выбранным фильтрам</p>
                <button onClick={resetFilters}>Сбросить фильтры</button>
              </div>
            )}
          </div>
          
          <div className="last-buttons">
            <button className='Print' onClick={Print_execut}>Распечатать отчет</button>
            <button className='unload' onClick={Export_excel}>Выгрузить отчет</button> 
            <button className='Scan' onClick={scan}>Сканировать</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App