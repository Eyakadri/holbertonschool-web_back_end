#!/usr/bin/env python3
"""returns a list of random floats"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """returns a list of random floats"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 10
