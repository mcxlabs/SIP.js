/**
 * @fileoverview SIP TIMERS
 */

/**
 * @augments JsSIP
 */
(function(JsSIP) {
var Timers,
  T1 = 500,
  T2 = 4000,
  T4 = 5000;

Timers = {
  T1: T1,
  T2: T2,
  T4: T4,
  TIMER_B: 64 * T1,
  TIMER_D: 0  * T1,
  TIMER_F: 64 * T1,
  TIMER_H: 64 * T1,
  TIMER_I: 0  * T1,
  TIMER_J: 0  * T1,
  TIMER_K: 0  * T4,
  TIMER_L: 64 * T1,
  TIMER_M: 64 * T1
};

JsSIP.Timers = Timers;
}(JsSIP));