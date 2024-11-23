#!/usr/bin/env python3

"""measuring the time it takes to run a given number of
asynchronous tasks concurrently
"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    that wait for random amounts of time
    Returns the average time taken per coroutine over n
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    return (time.time() - start_time) / n
