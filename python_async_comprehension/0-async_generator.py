#!/usr/bin/env python3
"""returns a list of random floats"""
import asyncio
from typing import List
from random import uniform


async def async_generator() -> List[float]:
    """returns a list of random floats"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)

