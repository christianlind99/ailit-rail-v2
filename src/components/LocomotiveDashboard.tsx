// src/components/LocomotiveDashboard.tsx

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocomotiveDashboard: React.FC = () => {
  // Dummy state values; later hook up to real CAN-bus or GPS data
  const [time, setTime] = useState(new Date());
  const [speed, setSpeed] = useState(85); // km/h
  const [throttle, setThrottle] = useState(60); // %
  const [brake, setBrake] = useState(15); // %
  const [soc, setSoc] = useState(72); // %
  const [voltage, setVoltage] = useState(820); // V
  const [current, setCurrent] = useState(380); // A
  const [powerDraw, setPowerDraw] = useState(320); // kW
  const [regen, setRegen] = useState(45); // kW
  const [systemTemp, setSystemTemp] = useState(42); // °C
  const [range, setRange] = useState(120); // km
  const [nextStation, setNextStation] = useState('Stockholm C');
  const [eta, setEta] = useState('15:27');
  const [alerts, setAlerts] = useState<string[]>(['—']);
  const [position, setPosition] = useState<[number, number]>([
    59.3293, 18.0686,
  ]); // lat, lng

  // Tick clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-black p-6 font-sans text-white">
      <div className="grid h-full grid-cols-4 grid-rows-[auto_1fr_1fr] gap-6">
        {/* Header (spans all columns) */}
        <header className="col-span-4 flex items-center justify-between border-b border-gray-700 pb-2">
          <div className="text-2xl font-bold">Locomotive #A-101</div>
          <div className="text-lg text-gray-300">
            {time.toLocaleDateString()} {time.toLocaleTimeString()}
          </div>
        </header>

        {/* Row 2 */}
        {/* Speed & Controls */}
        <div className="flex flex-col justify-between rounded-2xl bg-gray-800 p-4">
          <h2 className="mb-4 text-xl font-medium">Speed & Controls</h2>
          <div className="flex flex-1 flex-col justify-around">
            <div className="text-5xl font-bold">{speed} km/h</div>
            <div>
              <div className="mb-1 text-sm">Throttle: {throttle}%</div>
              <div className="h-2 w-full rounded bg-gray-700">
                <div
                  className="h-full rounded bg-green-500"
                  style={{ width: `${throttle}%` }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 text-sm">Brake: {brake}%</div>
              <div className="h-2 w-full rounded bg-gray-700">
                <div
                  className="h-full rounded bg-red-500"
                  style={{ width: `${brake}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Battery State of Charge */}
        <div className="flex flex-col items-center rounded-2xl bg-gray-800 p-4">
          <h2 className="mb-4 text-xl font-medium">Battery SoC</h2>
          <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg border-2 border-white">
            <div
              className="absolute bottom-0 left-0 w-full bg-green-500"
              style={{ height: `${soc}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
              {soc}%
            </div>
          </div>
          <div className="text-sm text-gray-300">Range: {range} km</div>
        </div>

        {/* Power Draw & Regen */}
        <div className="flex flex-col justify-between rounded-2xl bg-gray-800 p-4">
          <h2 className="mb-4 text-xl font-medium">Power</h2>
          <div className="text-4xl font-bold text-red-400">{powerDraw} kW</div>
          <div className="text-sm text-green-300">Regen: {regen} kW</div>
        </div>

        {/* Row 3 */}
        {/* Electrical & Thermal */}
        <div className="flex flex-col justify-around rounded-2xl bg-gray-800 p-4">
          <h2 className="mb-2 text-xl font-medium">Electrical</h2>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-gray-300">Voltage</div>
              <div className="text-3xl font-bold">{voltage} V</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Current</div>
              <div className="text-3xl font-bold">{current} A</div>
            </div>
          </div>
          <h2 className="mb-2 mt-4 text-xl font-medium">Thermal</h2>
          <div className="text-3xl font-bold">{systemTemp} °C</div>
        </div>

        {/* Map (spans 2 cols, 2 rows) */}
        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl bg-gray-800">
          <MapContainer center={position} zoom={13} className="h-full w-full">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Locomotive Position</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Next Station & Alerts */}
        <div className="flex flex-col justify-between rounded-2xl bg-gray-800 p-4">
          <div>
            <h2 className="mb-2 text-xl font-medium">Next Station</h2>
            <div className="text-2xl font-bold">{nextStation}</div>
            <div className="text-sm text-gray-300">ETA: {eta}</div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-medium">Alerts</h2>
            <ul className="list-inside list-disc text-sm text-red-400">
              {alerts.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocomotiveDashboard;
