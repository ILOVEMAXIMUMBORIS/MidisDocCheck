import { useState } from 'react';
import './normalize.css';
import './App.css';
import loader_icon from "./assets/Loader.svg"
import logo from './assets/Midis_logo.svg';
import CircleIcon from '@mui/icons-material/Circle';
import { red, orange, lightGreen, grey } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

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

  const [errors, setErrors] = useState(initialErrors);
  const [filteredErrors, setFilteredErrors] = useState(initialErrors);
  const [filters, setFilters] = useState({ type: '', discipline: '', priority: '' });
  const [isScanning, setIsScanning] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const getPriorityColor = (priority: any) => {
    const p = priority.toLowerCase();

    switch (p) {
      case "критический":
        return red[500]
      case "высокий":
        return orange[500]
      case "средний":
        return lightGreen[500]
      case "низкий":
        return grey[500]
    }
  }

  const handleTypeChange = (e: any) => {
    const newFilters = { ...filters, type: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleDisciplineChange = (e: any) => {
    const newFilters = { ...filters, discipline: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handlePriorityChange = (e: any) => {
    const newFilters = { ...filters, priority: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filterSettings: any) => {
    let filtered = [...errors];
    if (filterSettings.type) filtered = filtered.filter(e => e.type === filterSettings.type);
    if (filterSettings.discipline) filtered = filtered.filter(e => e.discipline === filterSettings.discipline);
    if (filterSettings.priority) filtered = filtered.filter(e => e.priority === filterSettings.priority);
    setFilteredErrors(filtered);
  };

  const resetFilters = () => {
    setFilters({ type: '', discipline: '', priority: '' });
    setFilteredErrors(errors);
  };

  const Export_excel = () => {
    alert(`Экспортировано ${filteredErrors.length} записей в Excel`);
  };

  const Print_execut = () => {
    window.print();
  };

  const scan = () => {
    setIsScanning(true);
    setErrors([]);
    setFilteredErrors([]);

    setTimeout(() => {
      // По окончании проверки можно вернуть ошибки или оставить пустым
      setErrors(initialErrors);
      setFilteredErrors(initialErrors);
      setIsScanning(false);
      setIsStarted(true);
    }, 3000); // симулируем 3 секунды проверки
  };

  const countPriorities = (errorsArray: any) => ({
    critical: errorsArray.filter((e: any) => e.priority === 'Критический').length,
    high: errorsArray.filter((e: any) => e.priority === 'Высокий').length,
    medium: errorsArray.filter((e: any) => e.priority === 'Средний').length,
    low: errorsArray.filter((e: any) => e.priority === 'Низкий').length
  });

  const priorityCounts = countPriorities(filteredErrors);

  return (
    <div className="main">
      <div className="workspace">
        <div className="logo">
          <div className="image">
            <img src={logo} alt="Логотип МИДиС"/>
          </div>
        </div>
        <div className="logo-text">
            <p>Проверка учебных документов</p>
          </div>
        {isStarted ? (
          <>
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
            <button onClick={Export_excel} disabled={isScanning}>Экспорт в Excel</button>
          </div>
        </div>

        <div className="filters-section">
          <div className='Filters'>
            <select className='Type' value={filters.type} onChange={handleTypeChange} disabled={isScanning}>
              <option value="">Тип</option>
              <option value="Часы">Часы</option>
              <option value="Темы">Темы</option>
              <option value="Название">Название</option>
            </select>

            <select className='Discipline' value={filters.discipline} onChange={handleDisciplineChange} disabled={isScanning}>
              <option value="">Дисциплина</option>
              <option value="ЕН.03">ЕН.03</option>
              <option value="ПМ.01">ПМ.01</option>
              <option value="УП.02">УП.02</option>
              <option value="ZZ.02">ZZ.02</option>
            </select>

            <select className='priority' value={filters.priority} onChange={handlePriorityChange} disabled={isScanning}>
              <option value="">Приоритет</option>
              <option value="Критический">Критический</option>
              <option value="Высокий">Высокий</option>
              <option value="Средний">Средний</option>
              <option value="Низкий">Низкий</option>
            </select>

            <div className='Description'>Описание</div>
          </div>
        </div>

        <div className="main-info" style={{ overflowY: isScanning ? 'hidden' : 'auto' }}>
          {filteredErrors.length > 0 ? (
            filteredErrors.map((error, index) => (
              <div className="card" key={index}>
                <div className="card-column Card-Type"><p>{error.type}</p></div>
                <div className="card-column Discipline-card"><p>{error.discipline}</p></div>
                <div className="card-column Priority-Card">
                  <CircleIcon sx={{
                    color: getPriorityColor(error.priority)
                  }}/>
                  <p>{error.priority}</p>
                </div>
                <div className="card-column Desc-Card"><p>{error.description}</p></div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className='Check-Filter'>
                {isScanning ? (
                  <>
                    <p>Проверка документов</p>
                    <Box sx={{ width: '50%', mt: 1, ml: 31 }}>
                      <LinearProgress />
                    </Box>
                  </>
                ) : (
                  <p>Нет результатов по выбранным фильтрам</p>
                )}
              </div>

              {!isScanning && errors.length > 0 && (
                <button onClick={resetFilters}>Сбросить фильтры</button>
              )}
            </div>
          )}
        </div>

        <div className="last-buttons">
          <button className='Print' onClick={Print_execut} disabled={isScanning}>Распечатать отчет</button>
          <button className='unload' onClick={Export_excel} disabled={isScanning}>Выгрузить отчет</button> 
          <button className='Scan' onClick={scan} disabled={isScanning}>{isScanning ? (<img className='Loader-icon' src={loader_icon} alt='Загрузка...'></img>) : ("Сканировать")}</button>
        </div>
          </>
        ) : (
        <>
          <div className="welcome">
            <h1>Добро пожаловать в МИДиС DocCheck!</h1>
            <p>{isScanning ? "Сканирую документ..." : "Нажмите сканировать чтобы продолжить"}</p>
          <button className='WelcomeScan' onClick={scan} disabled={isScanning}>{isScanning ? (<img className='Loader-icon' src={loader_icon} alt='Загрузка...'></img>) : ("Сканировать")}</button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
