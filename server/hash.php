<?php $adminPassword = "123"; $hashedPassword = password_hash($adminPassword, PASSWORD_DEFAULT); echo $hashedPassword; ?>