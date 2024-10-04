"use client";

import { useState, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { parse } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CustomDateTimePicker() {
  const [date, setDate] = useState<Date>();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    if (date) {
      setDay(date.getDate().toString().padStart(2, "0"));
      setMonth((date.getMonth() + 1).toString().padStart(2, "0"));
      setYear(date.getFullYear().toString());
      setHours(date.getHours().toString().padStart(2, "0"));
      setMinutes(date.getMinutes().toString().padStart(2, "0"));
    }
  }, [date]);

  const handleInputChange = (
    value: string,
    setter: (value: string) => void,
    max: number
  ) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= max) {
      setter(value.padStart(2, "0"));
    } else if (value === "") {
      setter("");
    }
  };

  const handleDateTimeChange = () => {
    const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    const newDate = parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss", new Date());
    if (!isNaN(newDate.getTime())) {
      setDate(newDate);
    }
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="last-name">Inicio de tudo</Label>
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          value={day}
          onChange={(e) => handleInputChange(e.target.value, setDay, 31)}
          className="w-14"
          placeholder="DD"
          maxLength={2}
          onBlur={handleDateTimeChange}
          aria-label="Day"
        />
        <span className="text-2xl">/</span>
        <Input
          type="text"
          value={month}
          onChange={(e) => handleInputChange(e.target.value, setMonth, 12)}
          className="w-14"
          placeholder="MM"
          maxLength={2}
          onBlur={handleDateTimeChange}
          aria-label="Month"
        />
        <span className="text-2xl">/</span>
        <Input
          type="text"
          value={year}
          onChange={(e) => handleInputChange(e.target.value, setYear, 9999)}
          className="w-20"
          placeholder="YYYY"
          maxLength={4}
          onBlur={handleDateTimeChange}
          aria-label="Year"
        />
        <span className="text-2xl mx-2">-</span>
        <Input
          type="text"
          value={hours}
          onChange={(e) => handleInputChange(e.target.value, setHours, 23)}
          className="w-14"
          placeholder="HH"
          maxLength={2}
          onBlur={handleDateTimeChange}
          aria-label="Hours"
        />
        <span className="text-2xl">:</span>
        <Input
          type="text"
          value={minutes}
          onChange={(e) => handleInputChange(e.target.value, setMinutes, 59)}
          className="w-14"
          placeholder="MM"
          maxLength={2}
          onBlur={handleDateTimeChange}
          aria-label="Minutes"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-10 p-0", !date && "text-muted-foreground")}
              aria-label="Pick a date and time"
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                if (newDate) {
                  const newDateTime = new Date(newDate);
                  newDateTime.setHours(parseInt(hours) || 0);
                  newDateTime.setMinutes(parseInt(minutes) || 0);
                  setDate(newDateTime);
                }
              }}
              initialFocus
            />
            <div className="flex justify-between p-3 border-t">
              <Input
                type="time"
                value={`${hours}:${minutes}`}
                onChange={(e) => {
                  const [newHours, newMinutes] = e.target.value.split(":");
                  setHours(newHours);
                  setMinutes(newMinutes);
                  handleDateTimeChange();
                }}
                className="w-full"
                aria-label="Time"
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
