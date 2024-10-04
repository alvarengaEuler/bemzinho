"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Plus, Trash2 } from "lucide-react";

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
import { toast } from "@/hooks/use-toast";
import { useTimerStore } from "@/app/store/useTimeStore";

export function RelationshipTimerAndCountdowns() {
  const {
    relationshipStart,

    timers,
    setRelationshipStart,
    updateRelationshipDuration,
    addTimer,
    removeTimer,
    updateTimer,
    updateCountdowns,
  } = useTimerStore();

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateRelationshipDuration();
      updateCountdowns();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateRelationshipDuration, updateCountdowns]);

  const handleRelationshipStartSelect = (selectedDate: Date | undefined) => {
    if (selectedDate && selectedDate > new Date()) {
      toast({
        title: "Invalid Date",
        description: "The relationship start date cannot be in the future.",
        variant: "destructive",
      });
      return;
    }
    setRelationshipStart(selectedDate);
  };

  const handleTitleChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateTimer(id, { title: event.target.value });
  };

  const handleDateSelect = (id: number, selectedDate: Date | undefined) => {
    if (selectedDate && selectedDate < new Date()) {
      toast({
        title: "Invalid Date",
        description: "Please select a future date.",
        variant: "destructive",
      });
      return;
    }
    updateTimer(id, { date: selectedDate || new Date() });
  };

  const handleTimeChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateTimer(id, { time: event.target.value });
  };

  return (
    <div className="space-y-8 p-4 bg-background rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="space-y-4 p-4 border border-border rounded-md">
        {/* names begin*/}
        <h2 className="text-xl font-bold text-center">The couple names</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name1"
              className="block text-sm font-medium text-gray-700"
            >
              Name 1
            </label>
            <input
              type="text"
              id="name1"
              name="name1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="eg.: Ricco"
              // value={name1}
              // onChange={(e) => setName1(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="name2"
              className="block text-sm font-medium text-gray-700"
            >
              Name 2
            </label>
            <input
              type="text"
              id="name2"
              name="name2"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="eg.: Lindsay"
              // value={name2}
              // onChange={(e) => setName2(e.target.value)}
            />
          </div>
        </div>
        {/* names end */}
        <h2 className="text-xl font-bold text-center">When it started</h2>
        <div className="space-y-2">
          <Label htmlFor="relationship-start">Relationship Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="relationship-start"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !relationshipStart && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {relationshipStart ? (
                  format(relationshipStart, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={relationshipStart}
                onSelect={handleRelationshipStartSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* {relationshipDuration && (
          <div className="text-center p-4 bg-primary/10 rounded-md">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Time Together
            </h3>
            <p className="text-2xl font-bold text-primary">
              {relationshipDuration}
            </p>
          </div>
        )} */}
      </div>

      <h2 className="text-2xl font-bold text-center">Countdown Timers</h2>
      {timers.map((timer) => (
        <div
          key={timer.id}
          className="space-y-4 p-4 border border-border rounded-md"
        >
          <div className="space-y-2">
            <Label htmlFor={`title-${timer.id}`}>Title</Label>
            <Input
              id={`title-${timer.id}`}
              value={timer.title}
              onChange={(e) => handleTitleChange(timer.id, e)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`date-${timer.id}`}>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id={`date-${timer.id}`}
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !timer.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {timer.date ? (
                    format(timer.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={timer.date}
                  onSelect={(date) => handleDateSelect(timer.id, date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`time-${timer.id}`}>Time</Label>
            <div className="relative">
              <Input
                id={`time-${timer.id}`}
                type="time"
                value={timer.time}
                onChange={(e) => handleTimeChange(timer.id, e)}
                className="w-full pl-10"
              />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {timer.countdown && (
            <div className="text-center p-4 bg-primary/10 rounded-md">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {timer.title}
              </h2>
              <p className="text-2xl font-bold text-primary">
                {timer.countdown}
              </p>
            </div>
          )}

          <Button
            variant="destructive"
            size="sm"
            className="w-full"
            onClick={() => removeTimer(timer.id)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove Timer
          </Button>
        </div>
      ))}

      {timers.length < 3 && (
        <Button onClick={addTimer} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Timer
        </Button>
      )}
    </div>
  );
}
